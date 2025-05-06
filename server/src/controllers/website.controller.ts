import prisma from "../config/db.config.js";

export async function createWebsite(req: any, res: any, next: any) {
    try {
        const { name, url } = req.body;

        const website = await prisma.url.create({
            data: {
                name: name ?? '',
                url: url,
                user_id: req.user.id
            }
        });

        res.status(200).json({
            success: true,
            message: 'Website created successfully',
            data: website
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}

export async function getWebsites(req: any, res: any, next: any) {
    try {
        const websites = await prisma.url.findMany({
            where: {
                user_id: req.user.id
            }
        });

        res.status(200).json({
            success: true,
            message: 'Websites fetched successfully',
            data: websites
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}

export async function updateWebsite(req: any, res: any, next: any) {
    try {
        const { url, name } = req.body;
        const { id } = req.params;

        // check if website exists
        const websiteExists = await prisma.url.findUnique({
            where: {
                id: id
            }
        });

        if (!websiteExists) {
            return res.status(404).json({
                success: false,
                message: 'Website not found'
            })
        }

        const website = await prisma.url.update({
            where: {
                id: id
            },
            data: {
                name: name ?? '',
                url: url
            }
        });

        res.status(200).json({
            success: true,
            message: 'Website updated successfully',
            data: website
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}

export async function deleteWebsite(req: any, res: any, next: any) {
    try {
        const { id } = req.params;

        // check if website exists
        const websiteExists = await prisma.url.findUnique({
            where: {
                id: id
            }
        });

        if (!websiteExists) {
            return res.status(404).json({
                success: false,
                message: 'Website not found'
            })
        }

        const website = await prisma.url.delete({
            where: {
                id: id
            }
        })

        res.status(200).json({
            success: true,
            message: 'Website deleted successfully',
            data: website
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
}