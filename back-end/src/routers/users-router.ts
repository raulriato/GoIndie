import { Response, Router } from 'express';

const usersRouter = Router();

usersRouter
  .post('/', (_req, res: Response) => res.status(200).send('ok'));
export { usersRouter };