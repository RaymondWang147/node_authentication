import express from 'express';
import session, { Store } from 'express-session';

import { SESSION_OPTIONS } from './config';
import { register } from './routes';
export const createApp = (store: Store) => {
  const app = express();
  app.use(express.json());
  app.use(
    session({
      ...SESSION_OPTIONS,
      store,
    }),
  );
  app.use(register);
  app.use((_req, res, _next) =>
    res.status(404).json({ messaage: 'Not Found' }),
  );
  app.use((_err, _req, res, _next) =>
    res.status(500).json({ message: 'internal Server Error' }),
  );
  return app;
};
