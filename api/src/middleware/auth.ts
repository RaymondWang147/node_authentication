import { Request, Response, NextFunction } from 'express';
import { isLoggedIn } from '../auth';

export const guest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`hit guest middleware`);
  if (isLoggedIn(req)) {
    console.log('already logged in');
    return next(new Error('you are already logged in'));
  }
  next();
};
