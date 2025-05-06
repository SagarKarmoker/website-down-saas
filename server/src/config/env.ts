import dotenv from 'dotenv';
dotenv.config();

export const {
  PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  RABBITMQ_URL,
  RESEND_API
} = process.env;