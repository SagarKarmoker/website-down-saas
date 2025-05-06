import amqp from 'amqplib';
import { RABBITMQ_URL } from './env.js';

export async function connectToRabbitMQ() {
    const connection = await amqp.connect(RABBITMQ_URL as string);
    const channel = await connection.createChannel();
    return channel;
}

export async function publishMessage(channel: amqp.Channel, queueName: string, message: any) {
    channel.assertExchange(queueName, 'fanout', { durable: false });
    channel.publish(queueName, '', Buffer.from(JSON.stringify(message)));
}

export async function consumeMessage(channel: amqp.Channel, queueName: string, callback: (message: any) => void) {
    channel.assertQueue(queueName, { durable: false });
    channel.consume(queueName, (msg) => {
        if (msg) {
            callback(JSON.parse(msg.content.toString()));
            channel.ack(msg);
        }
    })
}