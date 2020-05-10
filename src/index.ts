import 'reflect-metadata';

/**
 * Configs
 */
require('dotenv').config();
import express from './config/express.config';
const morgan = require('morgan');
import application from './config/application.config';
import logger from './config/logger.config';

/**
 * Middlewares
 */
import {
  notFoundErrorHandler,
  resErrorHandler,
} from './middlewares/errorHandler.middleware';
import authenticate from './middlewares/authenticate.middleware';

/**
 * Modules
 */
import indexRoute from './modules/routes';

import { PORT } from '../environment';
import { createConnection } from 'typeorm';

/**
 * Database Connection
 */
createConnection()
  .then(() => {
    logger.info('database connected');
    express.use(morgan('dev'));

    express.use(authenticate);

    express.use(application.url.base, indexRoute);

    // Error Handlers
    // express.use(joiErrorHandler);
    express.use(notFoundErrorHandler);
    express.use(resErrorHandler);

    express.listen(PORT, () => {
      logger.info(`Server running at ${PORT}`);
    });
  })
  .catch((error) => {
    logger.info(`Database connection failed with error ${error}`);
  });

export default express;
