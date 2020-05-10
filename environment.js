const environment = process.env;

module.exports = {
  environment,

  // Server
  NODE_ENV: environment.NODE_ENV,
  PORT: environment.PORT || 5000,

  // Database
  DB_HOST: environment.DB_HOST || '127.0.0.1',
  DB_USER: environment.DB_USER || 'root',
  DB_PASSWORD: environment.DB_PASSWORD || 'linchpins_chore',
  DB_NAME: environment.DB_NAME || 'splitchore',

  // Application
  TOKEN_SECRET_KEY: environment.TOKEN_SECRET_KEY || 'secret',
};
