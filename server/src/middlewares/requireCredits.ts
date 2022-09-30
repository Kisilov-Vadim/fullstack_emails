/* eslint-disable @typescript-eslint/ban-ts-comment */
import {NextFunction, Request, Response} from 'express';

export const requireCredits = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // @ts-ignore
  if (req.user?.credits < 1) {
    return res.status(403).send({error: 'Not enough credits!'});
  }

  next();
};
