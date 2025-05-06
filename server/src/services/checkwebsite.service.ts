import axios from 'axios';
import amqp from 'amqplib';
import prisma from '../config/db.config.js';

interface Website {
  id: string;
  url: string;
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
  }

  private async loadWebsites() {
    try {
      const websites = await prisma.url.findMany({
        select: { id: true, url: true },
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
    console.log('RabbitMQ connected');
  }

  private async publishMessage(message: string) {
    this.channel.sendToQueue('website-check', Buffer.from(message));
  }

  private async checkWebsiteStatus() {
    for (const site of this.websites) {
      try {
        const response = await axios.get(site.url);
        const isDown = response.status !== 200;

        const status = isDown ? 'DOWN' : 'UP';
        const logMessage = `Website ${site.url} is ${status}`;
        console.log(logMessage);

        await prisma.checkTable.create({
          data: {
            url_id: site.id,
            status,
            checkedAt: new Date(),
          },
        });

        if (isDown) {
          await this.publishMessage(logMessage);
        }
      } catch (error) {
        const logMessage = `Website ${site.url} is DOWN`;
        console.log(logMessage);

        await prisma.checkTable.create({
          data: {
            url_id: site.id,
            status: 'DOWN',
            checkedAt: new Date(),
          },
        });

        await this.publishMessage(logMessage);
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

    channel.consume('website-check', (msg) => {
      if (msg) {
        console.log('Consumed from queue:', msg.content.toString());
        channel.ack(msg);
        // You could add email logic here
      }
    });
  }
}
