import express, { Request, Response } from 'express';
import cors from 'cors';
import { usersRouter } from '@/routers';
import httpStatus from 'http-status';
import { loadEnv } from '@/config';

loadEnv();
const port = process.env.PORT;
const app = express();

app
  .use(express.json())
  .use(cors())
  .get('/status', (_req: Request, res: Response) => res.status(httpStatus.OK).send('OK'))
  .use('/users', usersRouter)
  .get('/status', (_, res) => res.status(200).send('ok'))
  .listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Listening on port ${port}`);
  });

process.on('unhandledRejection', (reason) => {
  // eslint-disable-next-line no-console
  console.error(reason);
});

process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  console.error('uncaughtException', JSON.stringify(err));
});

export default app;