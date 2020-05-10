import express from 'express';
const router = express.Router();

import auth from './auth/auth.route';
import user from './user/user.route';

/**
 * Auth routes
 */
router.use('/auth', auth);
router.use('/user', user);

export default router;
