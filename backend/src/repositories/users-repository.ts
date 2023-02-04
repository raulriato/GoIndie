import { prisma } from '@/config';
import { User } from '@prisma/client';

async function create(data: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> {
  return prisma.user.create({
    data
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

export const usersRepository = {
  create,
  findByEmail
};
