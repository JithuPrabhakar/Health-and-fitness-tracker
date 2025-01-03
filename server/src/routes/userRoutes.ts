import express from 'express'
import { getAllUsers, createUser } from '../controllers/userController'

const router = express.Router()

// Get all users
router.get('/', getAllUsers)

// Add a new user
router.post('/', createUser)

export default router
