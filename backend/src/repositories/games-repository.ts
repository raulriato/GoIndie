import { prisma } from '@/config';
import { GamesResponse, OrderGames } from '@/services';

export function bolinha() {
  return;
}

async function findMany({ column = 'avgRating', order = 'desc' }: OrderGames): Promise<GamesResponse> {
  return prisma.game.findMany({
    include: {
      Image: {
        select: {
          id: true,
          gameId: true,
          url: true
        }
      },
    },
    orderBy: {
      [column]: order
    }
  });
}

export const gamesRepository = {
  findMany
};