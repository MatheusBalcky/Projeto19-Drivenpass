import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';
import * as cardSchemas from '../schemas/cardSchemas'
import { cards } from '@prisma/client';

export async function createCardMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));
    const cardData = req.body;

    const tokenInfo = jwt.validateToken(token);
    
    validateCardData(cardData);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function getCardMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function deleteCardMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

function validateCardData(cardData: Omit<cards, 'id' | 'user_id'>){
    const { error } = cardSchemas.cardDataSchema.validate(cardData, { abortEarly: false});
    if(error){
        throw { type: 'bad_request', message: error.details.map( item => item.message)}
    }
}