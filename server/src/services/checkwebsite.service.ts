import axios from 'axios';
import amqp from 'amqplib';
import prisma from '../config/db.config.js';
import { Resend } from 'resend';
import { RESEND_API } from '../config/env.js';

interface Website {
  id: string;
  url: string;
  user: {
    email: string;
  };
}

export class CheckWebsiteService {
  private websites: Website[] = [];
  private readonly interval: number;
  private readonly queueUrl: string;
  private channel!: amqp.Channel;

  constructor(interval: number, queueUrl: string) {
    this.interval = interval;
    this.queueUrl = queueUrl;
  }

  async init() {
    await this.loadWebsites();
    await this.initRabbitMQ();
    this.scheduleWebsiteCheck();
    await this.consumeMessage(); // start consuming
  }

  private async loadWebsites() {
    try {
      const websites = await prisma.url.findMany({
        select: {
          id: true,
          url: true,
          user: {
            select: {
              email: true,
            },
          },
        },
      });
      this.websites = websites;
    } catch (error) {
      console.error('Error loading websites:', error);
    }
  }

  private async initRabbitMQ() {
    const connection = await amqp.connect(this.queueUrl);
    this.channel = await connection.createChannel();
    await this.channel.assertQueue('website-check');
    console.log('✅ RabbitMQ connected');
  }

  private async publishMessage(payload: object) {
    this.channel.sendToQueue('website-check', Buffer.from(JSON.stringify(payload)));
  }

  private async checkWebsiteStatus() {
    for (const site of this.websites) {
      try {
        const response = await axios.get(site.url);
        const isDown = response.status !== 200;
        const status = isDown ? 'DOWN' : 'UP';

        await prisma.checkTable.create({
          data: {
            url_id: site.id,
            status,
            checkedAt: new Date(),
          },
        });

        console.log(`🔍 Website ${site.url} is ${status}`);

        // Publish to queue if DOWN
        if (isDown) {
          await this.publishMessage({
            url_id: site.id,
            url: site.url,
            userEmail: site.user.email,
          });
        }

      } catch (error) {
        console.log(`🔻 Website ${site.url} is DOWN`);

        await prisma.checkTable.create({
          data: {
            url_id: site.id,
            status: 'DOWN',
            checkedAt: new Date(),
          },
        });

        await this.publishMessage({
          url_id: site.id,
          url: site.url,
          userEmail: site.user.email,
        });
      }
    }
  }

  private scheduleWebsiteCheck() {
    this.checkWebsiteStatus(); // Initial run
    setInterval(() => this.checkWebsiteStatus(), this.interval);
  }

  async consumeMessage() {
    const connection = await amqp.connect(this.queueUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue('website-check');

    channel.consume('website-check', async (msg) => {
      if (msg) {
        const payload = JSON.parse(msg.content.toString());
        console.log('📥 Consumed from queue:', payload);

        const lastChecks = await prisma.checkTable.findMany({
          where: {
            url_id: payload.url_id,
          },
          orderBy: {
            checkedAt: 'desc',
          },
          take: 10,
        });

        const isDown = lastChecks.every((check) => check.status === 'DOWN');

        if (!isDown) {
          console.log(`✅ Website ${payload.url} is UP, not sending email`);
          channel.ack(msg);
          return;
        }

        /**
         * Send email if the website is down for more than 10 times
         * and the last check is down and when the email send
         */

        const lastsend = await prisma.emailSending.findFirst({
          where: {
            url_id: payload.url_id,
          },
          orderBy: {
            sendAt: 'desc',
          },
        });

        // if last send is more than 10 minutes ago
        if (lastsend && new Date().getTime() - lastsend.sendAt.getTime() < 10 * 60 * 1000) {
          console.log(`⏰ Website ${payload.url} is DOWN, but email already sent`);
          channel.ack(msg);
          return;
        }

        await prisma.emailSending.create({
          data: {
            email: payload.userEmail,
            status: 'DOWN',
            sendAt: new Date(),
            user: {
              connect: {
                email: payload.userEmail,
              },
            },
            url: {
              connect: {
                id: payload.url_id,
              },
            },
          },
        });

        await this.sendMail(payload.userEmail, payload.url);
        channel.ack(msg);
      }
    });
  }

  async sendMail(to: string, websiteUrl: string) {
    console.log(`🔴 Sending alert email to ${to} for ${websiteUrl}`);
    try {
      const resend = new Resend(RESEND_API);
      await resend.emails.send({
        from: 'Status Watcher <onboarding@resend.dev>',
        to: [to],
        subject: '🔴 Website Down Alert',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #FF4B4B; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 24px;">⚠️ Website Down Alert</h1>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                We've detected that your monitored website is currently experiencing issues:
              </p>
              <div style="background: #F8F9FA; padding: 15px; border-radius: 6px; margin: 15px 0;">
                <code style="word-break: break-all;">${websiteUrl}</code>
              </div>
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                Current Status: <span style="background: #FF4B4B; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;">DOWN</span>
              </p>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                We'll notify you once the website is back online.
              </p>
            </div>
            <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
              Powered by Status Watcher
            </div>
          </div>
        `,
      });
    } catch (error) {
      console.log('❌ Failed to send email:', error);
    }
  }
}
