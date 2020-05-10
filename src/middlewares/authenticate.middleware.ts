import { Response, NextFunction } from 'express';
import httpStatusCodes from 'http-status-codes';
import UserService from '../modules/user/user.service';
import apiResponse from '../helpers/response.helper';
import { verifyToken } from '../helpers/encryption.helper';
import application from '../config/application.config';
import IRequest from '../types/IRequest';

/**
 * Route authentication middleware to verify a token
 * @param  {Request}        req
 * @param  {Response}       res
 * @param  {NextFunction}   next
 */

export default async (req: IRequest, res: Response, next: NextFunction) => {
  if (
    application.authorizationIgnorePath.indexOf(`${req.originalUrl}`) === -1
  ) {
    let token: any = null;
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      token = req.query.token;
    }
    if (token) {
      const decoded = await verifyToken(token);
      if (decoded && decoded.sub) {
        const user = await UserService.getUserById(decoded.sub);
        if (user) {
          // @ts-ignore
          req.user = user;
        } else {
          apiResponse.error(res, httpStatusCodes.UNAUTHORIZED);
          return;
        }
      } else {
        apiResponse.error(res, httpStatusCodes.UNAUTHORIZED);
        return;
      }
    } else {
      apiResponse.error(res, httpStatusCodes.FORBIDDEN);
      return;
    }
  }
  next();
};
