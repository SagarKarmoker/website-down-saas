import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';

export async function authMiddleware(req: any, res: any, next: any) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'No authorization header provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // decode token asynchronously
    const decoded = jwt.verify(token, JWT_SECRET as string);
    if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // console.log(decoded)
    // role check
    req.user = decoded;
    next();
}