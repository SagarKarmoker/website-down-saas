import prisma from "../config/db.config.js";

export async function getUsers(req: any, res: any, next: any) {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                password: false
            }
        });

        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching users',
            error: error
        })
    }
}

export async function getUser(req: any, res: any, next: any) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                password: false
            }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching user',
            error: error
        })
    }
}

export async function getUserById(req: any, res: any, next: any) {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'User id is required' });
        }

        if (req.user.role !== 'ADMIN') {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized only admin'
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                password: false
            }
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching user',
            error: error
        })
    }
}