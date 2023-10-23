import { Request, Response, NextFunction } from "express";

export function timeStamp (req: Request, res: Response, next: NextFunction) {
    req.time = Date.now()
    console.log("Time:", Date.now());
  next();
}