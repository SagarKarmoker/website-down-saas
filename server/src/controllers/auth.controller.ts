import prisma from "../config/db.config.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export async function signup(req: any, res: any, next: any) {
    try {
        const { email, password, name } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // zod validation

        // check if email is already registered
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: name ?? '',
            },
        });

        // generate token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: '1d',
        });

        // send token
        res.status(201).json({ token: token });

    } catch (error) {
        next(error);
    }
}

export async function login(req: any, res: any, next: any) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // zod validation

        // check if email is registered
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // generate token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, {
            expiresIn: '1d',
        });

        // send token
        res.status(200).json({ token: token });
    } catch (error) {
        next(error);
    }
}

