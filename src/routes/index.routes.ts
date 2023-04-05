import express from 'express';
import pageRoutes from './page.routes';

const router = express.Router();

router.use(pageRoutes);

export default router;
