import express, { Application } from 'express';
import path from 'path';
import router from '../routes/index.routes';

const createApp = () => {
    const app: Application = express();

    app.set('views', './views');

    app.use(express.static(path.join(__dirname, '../../public')));

    app.use(express.json());

    app.use(router);

    return app;
};

export default createApp;
