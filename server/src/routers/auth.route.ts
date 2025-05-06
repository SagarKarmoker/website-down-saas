import {Router} from 'express';
import { signup, login } from '../controllers/auth.controller.js';

const authRouter = Router();

// api/v1/auth/
authRouter.post('/login', login)
authRouter.post('/signup', signup)

export default authRouter;