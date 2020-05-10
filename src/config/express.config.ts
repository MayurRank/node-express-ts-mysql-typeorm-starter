import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

/**
 * Express related configurations only
 */

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

export default app;
