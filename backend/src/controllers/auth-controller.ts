import { authService, SignInParams, SignUpParams, UserResponse } from '@/services';
import { Request, Response } from 'express';
import { badRequestResponse, conflictResponse, createdResponse, okResponse, unauthorizedRequestResponse } from './controllersHelper';

export async function signUp(req: Request, res: Response) {
  const { name, email, password } = req.body as SignUpParams;

  try {
    const user = await authService.signUp({ name, email, password }) as UserResponse;

    return createdResponse(res, {
      id: user.id,
      email: user.email,
      name: user.name
    });
  } catch (error) {
    if (error.name === 'DuplicatedEmailError') return conflictResponse(res, error);
    return badRequestResponse(res);
  }
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const token = await authService.signIn({ email, password });

    return okResponse(res, token);
  } catch (error) {
    if (error.name === 'InvalidCredentialsError') return unauthorizedRequestResponse(res, error);
    return badRequestResponse(res);
  }
}