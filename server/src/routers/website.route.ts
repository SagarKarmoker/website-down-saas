import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createWebsite, getWebsites, updateWebsite, deleteWebsite } from '../controllers/website.controller.js';

const router = Router()
router.use(authMiddleware)

router.post("/create", createWebsite)
router.get("/my-websites", getWebsites)
router.put("/update/:id", updateWebsite)
router.delete("/delete/:id", deleteWebsite)

export default router;