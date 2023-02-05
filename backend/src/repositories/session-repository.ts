import { prisma } from '@/config';
import { Session } from '@prisma/client';

async function create(data: Omit<Session, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.session.create({
    data
  });
}

async function findByUserId(userId: number) {
  return prisma.session.findFirst({
    where: {
      userId,
      active: true
    }
  });
}

async function update(id: number) {
  return prisma.session.update({
    where: {
      id,
    },
    data: {
      active: false
    }
  });
}

export const sessionsRepository = {
  create,
  findByUserId,
  update
};