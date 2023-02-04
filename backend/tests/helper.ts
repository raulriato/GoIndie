import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.session.deleteMany({});
  await prisma.gameCategory.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.rating.deleteMany({});
  await prisma.like.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.image.deleteMany({});
  await prisma.game.deleteMany({});
}