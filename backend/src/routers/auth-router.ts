import { signUp } from '@/controllers';
import { validate } from '@/middlewares/validation-middleware';
import { signUpSchema } from '@/schemas';
import { Router } from 'express';

export const authRouter = Router();

authRouter
  .post('/sign-up', validate(signUpSchema, 'body'), signUp);