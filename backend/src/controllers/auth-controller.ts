import { authService, SignUpParams, UserResponse } from '@/services';
import { Request, Response } from 'express';
import { badRequestResponse, conflictResponse, createdResponse } from './controllersHelper';

export async function signUp(req: Request, res: Response) {
  const { name, email, password } = req.body as SignUpParams;

  try {
    const user = await authService.signUp({ name, email, password }) as UserResponse;

    return createdResponse(res, user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    if (error.name === 'DuplicatedEmailError') {
      return conflictResponse(res, error);
    }
    return badRequestResponse(res);
  }
}