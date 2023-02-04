import express, { Response } from 'express';
import cors from 'cors';
import { authRouter } from '@/routers';
import { okResponse } from './controllers';
const app = express();

app
  .use(express.json())
  .use(cors())
  .get('/status', async (_, res: Response) => okResponse(res))
  .use('/auth', authRouter);

export default app;