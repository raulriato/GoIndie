import { signIn, signUp } from '@/controllers';
import { validate } from '@/middlewares/validation-middleware';
import { signInSchema, signUpSchema } from '@/schemas';
import { Router } from 'express';

export const authRouter = Router();

authRouter
  .post('/sign-up', validate(signUpSchema, 'body'), signUp)
  .post('/sign-in', validate(signInSchema, 'body'), signIn);