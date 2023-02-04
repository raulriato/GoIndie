import { duplicatedEmailError } from '@/errors';
import { usersRepository } from '@/repositories';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

async function signUp({ name, email, password }: SignUpParams): Promise<UserResponse> {
  const invalidEmail = await checkForUsedEmail(email);

  if (invalidEmail) {
    throw duplicatedEmailError();
  }

  const hashPassword = await bcrypt.hash(password, 12);
  const createdUser = await usersRepository.create({
    name,
    email,
    password: hashPassword
  });

  delete createdUser.created_at;
  delete createdUser.updated_at;
  delete createdUser.password;
  
  return createdUser;
}

async function checkForUsedEmail(email:string) {
  const userWithEmail = await usersRepository.findByEmail(email);
  return !!userWithEmail;
}

export type SignUpParams = Pick<User, 'name' | 'email' | 'password'>;
export type UserResponse = Omit<User, 'password' | 'created_at' | 'updated_at'>;

export const authService = {
  signUp
};