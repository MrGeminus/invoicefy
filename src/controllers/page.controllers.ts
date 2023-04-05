import { Request, Response } from 'express';
import path from 'path';

const getDashboardPage = async (request: Request, response: Response) => {
    response.status(200).sendFile(path.join(__dirname, '../../views/dashboard.html'));
};

export default { getDashboardPage };
