import { duplicatedEmailError } from '@/errors';
import { invalidCredentialsError } from '@/errors/invalid-credentials-error';
import { usersRepository } from '@/repositories';
import { sessionsRepository } from '@/repositories/session-repository';
import { Session, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function signUp(data: SignUpParams): Promise<UserResponse> {
  await validateEmail(data.email, 'signUp');

  const hashPassword = await bcrypt.hash(data.password, 12);
  data.password = hashPassword;
  const createdUser = await createUser(data);

  return createdUser;
}

async function signIn(data: SignInParams): Promise<Token> {
  const user = await validateEmail(data.email, 'signIn');

  await validatePassword(data.password, user.password);
  const token = await createSession(user.id);
  
  return token;
}

async function validateEmail(email: string, method: 'signIn' | 'signUp'): Promise<User> {
  const userWithEmail = await usersRepository.findByEmail(email);

  if (method === 'signUp') {
    if (userWithEmail) throw duplicatedEmailError();
    return;
  }

  if (!userWithEmail) throw invalidCredentialsError();

  return userWithEmail;
}

async function validatePassword(password: string, userPassword: string): Promise<void> {
  const isValidPassword = await bcrypt.compare(password, userPassword);
  if (!isValidPassword) throw invalidCredentialsError();
}

async function createUser(data: SignUpParams): Promise<User> {
  return usersRepository.create(data);
}

async function createSession(userId: number): Promise<Token> {
  const activeSession = await sessionsRepository.findByUserId(userId);

  if (activeSession) {
    await sessionsRepository.update(activeSession.id);
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  
  await sessionsRepository.create({
    userId,
    token,
    active: true
  });
  return { token };
}

export type SignUpParams = Pick<User, 'name' | 'email' | 'password'>;
export type SignInParams = Pick<User, 'email' | 'password'>;
export type UserResponse = Omit<User, 'password' | 'createdAt' | 'updatedAt'>;
export type Token = Pick<Session, 'token'>;

export const authService = {
  signUp,
  signIn
};