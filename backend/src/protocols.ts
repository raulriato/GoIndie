import { User } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type NewUserBody = Omit<User, 'password' | 'created_at' | 'updated_at'>