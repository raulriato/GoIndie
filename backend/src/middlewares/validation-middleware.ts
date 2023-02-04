import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { invalidDataError } from '@/errors';
import { badRequestResponse } from '@/controllers';

export function validate(schema: ObjectSchema, type: 'body' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      const details = error.details.map((d) => d.message);
      const body = invalidDataError(details);
      return badRequestResponse(res, body);
    }
  };
}
