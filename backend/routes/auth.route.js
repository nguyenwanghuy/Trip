import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import AuthCtrl from '../controllers/AuthController.js';
const router = express.Router();

router.post('/login', AuthCtrl.login);
router.post('/register', AuthCtrl.register);
router.get('/me', authMiddleware, AuthCtrl.getMe);
export default router;
