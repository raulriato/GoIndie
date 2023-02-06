import { getGames } from '@/controllers';
import { Router } from 'express';

export const gamesRouter = Router();

gamesRouter
  .get('/', getGames);