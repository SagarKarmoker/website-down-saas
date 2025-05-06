import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getUsers, getUser, getUserById } from '../controllers/user.controller.js'

const router = Router()
router.use(authMiddleware)

router.get("/", getUsers)
router.get("/profile", getUser) // self profile
router.get("/:id", getUserById)

export default router