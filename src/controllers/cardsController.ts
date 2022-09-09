import { Request, Response } from 'express';
import { cardToInsert } from '../interfaces/interfaces';
import * as cardService from '../services/cardServices'

export async function createCardController(req: Request, res: Response) {
    const cardData: cardToInsert = req.body;
    const userId = Number(res.locals.tokenInfo.userId);
    
    await cardService.createCardService(userId, cardData);

    res.status(201).send('Card created with success!');
}

export async function getCardController(req: Request, res: Response) {
    const cardId = Number(req.query.id);
    const userId = Number(res.locals.tokenInfo.userId);

    const result = await cardService.getCardsService(cardId, userId)

    res.status(200).send(result);
}

export async function deleteCardController(req: Request, res: Response) {
    const cardId = parseInt(req.params.cardId);
    const userId = Number(res.locals.tokenInfo.userId);

    await cardService.deleteCardService(cardId, userId);

    res.status(200).send('Card deleted with success!');
}