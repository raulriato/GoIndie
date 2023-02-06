import express, { Response } from 'express';
import cors from 'cors';
import { authRouter, gamesRouter } from '@/routers';
import { okResponse } from './controllers';
const app = express();

app
  .use(express.json())
  .use(cors())
  .use('/auth', authRouter)
  .use('/games', gamesRouter)
  .get('/status', async (_, res: Response) => okResponse(res));

export default app;