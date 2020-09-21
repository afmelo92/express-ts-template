import { Router } from 'express';

import sendRouter from './send.routes';

const routes = Router();

routes.use('/send', sendRouter);

export default routes;
