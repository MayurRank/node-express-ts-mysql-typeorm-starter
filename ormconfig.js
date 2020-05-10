const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV,
} = require('./environment');

module.exports = {
  type: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  charset: 'utf8',
  driver: 'mysql',
  synchronize: NODE_ENV !== 'production',
  entities: ['**/**.entity.ts'],
  logging: NODE_ENV !== 'production' ? 'all' : 'error',
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  connectTimeout: 30000,
  acquireTimeout: 30000,
};
