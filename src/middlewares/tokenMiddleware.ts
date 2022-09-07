import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';

export async function tokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const result = jwt.verifyToken(token);
    if(!result){
        throw { type: 'unauthorized', message: 'Invalid token!'}
    }

    next();
}