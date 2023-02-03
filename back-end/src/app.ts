import express, { Response } from 'express';
import cors from 'cors';
import { usersRouter } from '@/routers';
import httpStatus from 'http-status';
import '@/config/envs';

const port = process.env.PORT;
const app = express();

app
  .use(express.json())
  .use(cors())
  .get('/status', async (_, res: Response) => res.status(httpStatus.OK).send('OK'))
  .use('/users', usersRouter)
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