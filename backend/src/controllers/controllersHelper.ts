import { NewUserBody } from '@/protocols';
import { Token } from '@/services';
import { Response } from 'express';
import httpStatus from 'http-status';

const STATUS_BODY = Object.freeze({
  OK: {
    name: 'ok',
    message: 'ok'
  },
  CREATED:  {
    name: 'created',
    message: 'created'
  },
  UNPROCESSABLE_ENTITY:  {
    name: 'unprocessableEntity',
    message: 'unprocessable entity'
  },
  BAD_REQUEST: {
    name: 'badRequest',
    message: 'bad request'
  },
  SERVER_ERROR:  {
    name: 'serverError',
    message: 'server error'
  },
  NOT_FOUND:  {
    name: 'notfound',
    message: 'not found'
  },
  UNAUTHORIZED: {
    name: 'unauthorized',
    message: 'unauthorized'
  },
  CONFLICT:  {
    name: 'conflict',
    message: 'conflict'
  },
});

type BodyParams = {
  name: string,
  message: string,
  details?: string[]
}

function badRequestResponse(res: Response, body: BodyParams = STATUS_BODY.BAD_REQUEST) {
  return res.status(httpStatus.BAD_REQUEST).send(body);
}

function notFoundRequestResponse(res: Response, body: BodyParams = STATUS_BODY.NOT_FOUND) {
  return res.status(httpStatus.NOT_FOUND).send(body);
}

function unprocessableRequestResponse(
  res: Response,
  body: BodyParams = STATUS_BODY.UNPROCESSABLE_ENTITY
) {
  return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(body);
}
function okResponse(res: Response, body: BodyParams | Token = STATUS_BODY.OK) {
  return res.status(httpStatus.OK).send(body);
}

function serverErrorResponse(res: Response, body: BodyParams = STATUS_BODY.SERVER_ERROR) {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(body);
}

function unauthorizedRequestResponse(res: Response, body: BodyParams = STATUS_BODY.UNAUTHORIZED) {
  return res.status(httpStatus.UNAUTHORIZED).send(body);
}

function conflictResponse(res: Response, body: BodyParams = STATUS_BODY.CONFLICT) {
  return res.status(httpStatus.CONFLICT).send(body);
}

function createdResponse(res: Response, body: BodyParams | NewUserBody = STATUS_BODY.CREATED) {
  return res.status(httpStatus.CREATED).send(body);
}

export {
  badRequestResponse,
  unprocessableRequestResponse,
  notFoundRequestResponse,
  okResponse,
  serverErrorResponse,
  unauthorizedRequestResponse,
  conflictResponse,
  createdResponse
};