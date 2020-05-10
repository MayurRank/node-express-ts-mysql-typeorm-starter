import { TOKEN_SECRET_KEY } from '../../environment';

/**
 * General configurations
 */

const base: string = '/api';

export default {
  url: {
    base,
  },
  timers: {
    userTokenExpiry: '1h',
  },
  env: {
    authSecret: TOKEN_SECRET_KEY,
  },
  authorizationIgnorePath: [`${base}/auth/login`, `${base}/user/register`],
};
