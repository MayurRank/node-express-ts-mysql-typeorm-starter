import express from 'express';
import AuthController from './auth.controller';

const router = express.Router();

//Login route
router.post('/login', AuthController.login);

//Change my password
router.post('/change-password', AuthController.changePassword);

export default router;
