import { GamesResponse, gamesService, OrderGames } from '@/services';
import { Request, Response } from 'express';
import { notFoundRequestResponse, okResponse } from './controllersHelper';

export async function getGames(req: Request, res: Response) {
  const { column, order } = req.params as OrderGames;

  try {
    let games: GamesResponse;
    if (column && order) {
      games = await gamesService.getGames({ column, order });
    } else {
      games = await gamesService.getGames({ column: 'avgRating', order: 'desc' });
    }

    return okResponse(res, games);
  } catch (error) {
    return notFoundRequestResponse(res, error);
  }
}