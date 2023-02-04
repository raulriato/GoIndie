import bcrypt from 'bcrypt';
import faker from '@faker-js/faker';
import { User } from '@prisma/client';
import { prisma } from '@/config';

export async function createUser(params: Partial<User> = {}): Promise<User> {
  const password = params.password || faker.internet.password(6);
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      name: params.name || faker.name.findName(),
      email: params.email || faker.internet.email(),
      password: hashedPassword,
    },
  });
}