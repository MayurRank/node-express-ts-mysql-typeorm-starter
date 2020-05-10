import application from '../config/application.config';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Generate password hash
 * @param {string} password
 * @param {number} saltRounds
 */
const generateHash = async (
  password: string,
  saltRounds: number = 10
): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err: any, hash: string) => {
      if (!err) {
        resolve(hash);
      }
      reject(err);
    });
  });

/**
 * Verify password hash
 * @param {string} password
 * @param {string} hash
 */
const verifyHash = async (password: string, hash: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err: any, same: boolean) => {
      if (same) {
        resolve(true);
      }
      resolve(false);
    });
  });

/**
 * Generate token
 * @param {string} key
 * @param {string} value
 */
interface IJWTAssignableData {
  iss?: string;
  sub: string;
  aud?: string[];
  iat?: number;
  exp?: number;
  jti?: string;
  context?: any;
}
const generateToken = async (data: IJWTAssignableData) => {
  return jwt.sign(data, application.env.authSecret, {
    expiresIn: application.timers.userTokenExpiry,
  });
};

/**
 * Veify token
 * @param {string} token
 */
const verifyToken = async (token: string): Promise<any> =>
  new Promise((resolve) => {
    jwt.verify(
      token,
      application.env.authSecret,
      (err: Error, decoded: any) => {
        if (err) {
          resolve(null);
        } else {
          resolve(decoded);
        }
      }
    );
  });

export { generateHash, verifyHash, generateToken, verifyToken };
