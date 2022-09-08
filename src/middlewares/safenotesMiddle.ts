import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';
import * as safenoteSchemas from '../schemas/safenoteSchemas'
import * as interfaces from '../interfaces/interfaces'

export async function createSafenoteMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));
    const safenoteData = req.body;

    const tokenInfo = jwt.validateToken(token);
    
    validateSafenoteData(safenoteData);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function getSafenoteMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function deleteSafenoteMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

function validateSafenoteData(safenoteData: interfaces.safenoteData){
    const { error } = safenoteSchemas.safenoteDataSchema.validate(safenoteData, { abortEarly: false});
    if(error){
        throw { type: 'bad_request', message: error.details.map( item => item.message)}
    }
}