import { Request } from 'express';
import { User } from '../entities/user/user.entity';
import IRequest from '../types/IRequest';

/**
 * Get user id from request
 * @param {Request} req
 */
const extractUserIdFromRequest = (req: IRequest) => {
  return req.user.id;
};

/**
 * Get quesry params from request
 * @param {Request} req
 * @param {string} query
 */
const extractQueryFromRequest = (req: Request, query: string) => {
  if (req.query[query]) {
    //@ts-ignore
    return JSON.parse(req.query[query]);
  }
  return null;
};

/**
 * Get cookie from request
 * @param {Request} req
 * @param {string} key
 */
const extractCookieFromRequest = (req: Request, key: string) => {
  if (req.headers.authorization) {
    return req.headers.authorization;
  }
  if (req.headers.cookie) {
    const results = req.headers.cookie.split(';');
    const filtered = results.filter((result) => {
      return result.startsWith(`${key}=`);
    });
    if (filtered.length > 0) {
      return filtered[0].split('=')[1];
    }
  }
  return null;
};

/**
 * Remove critical stuff from user object
 * @param {User} user
 */
const sanitizeUser = (user: User) => {
  const { password, ...userWithOutPassword } = user;
  return userWithOutPassword;
};

export {
  extractUserIdFromRequest,
  extractQueryFromRequest,
  sanitizeUser,
  extractCookieFromRequest,
};
