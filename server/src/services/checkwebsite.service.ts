/** WORKING In progress
 * Check website service
 * this service will continous run and if website is down then msg publish to queue,
 * from queue if will send email to user about website is down
 */

import axios from 'axios';
import amqp from 'amqplib';
import prisma from '../config/db.config.js';

class CheckWebsiteService {
  private websites!: string[];
  private readonly interval: number;
  private readonly queueUrl: string;

  constructor(interval: number, queueUrl: string) {
    this.interval = interval;
    this.queueUrl = queueUrl;
  }

  async loadWebsite() {
    try {
      const websites = await prisma.url.findMany();
      this.websites = websites.map((website) => website.url);
    } catch (error) {
      console.log(error)
    }
  }

  async publishMessage(message: string) {
    const connection = await amqp.connect(this.queueUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue('website-check');
    channel.publish('website-check', 'fanout', Buffer.from(message));
    await channel.close();
    await connection.close();
  }

  async consumeMessage() {
    const connection = await amqp.connect(this.queueUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue('website-check');
    channel.consume('website-check', (message) => {
      if (message) {
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
  }

  async start() {
    await this.loadWebsite();
    while (true) {
      for (const website of this.websites) {
        try {
          const response = await axios.get(website);
          if (response.status !== 200) {
            const message = `Website ${website} is down`;
            console.log(message);
            await this.publishMessage(message);
          }
        } catch (error) {
          const message = `Website ${website} is down`;
          console.log(message);
          await this.publishMessage(message);
        }
      }
      await new Promise((res) => setTimeout(res, this.interval));
    }
  }
}