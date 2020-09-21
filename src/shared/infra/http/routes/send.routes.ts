import { Router } from 'express';

const sendRouter = Router();

sendRouter.get('/', async (request, response) => {
  const { message } = request.body;

  return response.json({ ok: message });
});

export default sendRouter;
