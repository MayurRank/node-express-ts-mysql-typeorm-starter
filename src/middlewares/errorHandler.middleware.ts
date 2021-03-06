import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

/********************************/
/**** API Errors
/********************************/

export interface IError {
  status?: number;
  code?: number;
  message?: string;
}
/**
 * NOT_FOUND(404) middleware to catch error response
 * @param  {Request}        req
 * @param  {Response}       res
 * @param  {NextFunction}   next
 */
export const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    },
  });
};

/**
 * Generic error response middleware
 * @param  {IError}         err
 * @param  {Request}        req
 * @param  {Response}       res
 * @param  {NextFunction}   next
 */
export const resErrorHandler = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: {
      code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        err.message ||
        HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
    },
  });
};
