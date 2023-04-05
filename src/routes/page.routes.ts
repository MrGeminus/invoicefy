import express from 'express';
import pageControllers from '../controllers/page.controllers';

const pageRoutes = express.Router();

pageRoutes.get('/dashboard', pageControllers.getDashboardPage);

export default pageRoutes;
