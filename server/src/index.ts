import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT, RABBITMQ_URL } from './config/env.js';
import authRouters from './routers/auth.route.js';
import userRoutes from './routers/user.route.js';
import websiteRoutes from './routers/website.route.js';
import { CheckWebsiteService } from './services/checkwebsite.service.js';

// Initialize express app
const app = express();

// Middleware
app.use(morgan('dev')); // Logging middleware
app.use(cors()); // CORS middleware
app.use(express.json()); // Parse JSON bodies

// Start website checking service
const checkWebsiteService = new CheckWebsiteService(30000, RABBITMQ_URL as string);
checkWebsiteService.init(); // replaces start()
checkWebsiteService.consumeMessage();

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Website down SaaS API');
});

// routes
app.use('/api/v1/auth', authRouters);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/websites', websiteRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

