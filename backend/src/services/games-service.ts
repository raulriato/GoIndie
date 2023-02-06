import { gamesRepository } from '@/repositories';
import { Game } from '@prisma/client';

async function getGames({ column, order }: OrderGames): Promise<GamesResponse> {
  return gamesRepository.findMany({ column, order });
}
export type OrderGames = {
  column: 'avgRating' | 'name' | 'releasedAt',
  order: 'asc' | 'desc'
};

export type GamesResponse = (Game & {
  Image: {
      id: number;
      gameId: number;
      url: string;
  }[];
})[]

export const gamesService = {
  getGames
};