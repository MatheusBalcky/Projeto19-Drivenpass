import { Request, Response } from 'express';
import * as interfaces from '../interfaces/interfaces';
import * as safenoteServices from '../services/safenoteServices'

export async function createSafenoteController(req: Request, res: Response) {
    const userId = Number(res.locals.tokenInfo.userId);
    const safenoteData: interfaces.safenoteData = req.body;

    await safenoteServices.createSafenoteService(safenoteData, userId);

    return res.status(201).send('Safe note created successfully.');
}

export async function getSafenoteController(req: Request, res: Response) {
    const safenoteId = Number(req.query.id);
    const userId = Number(res.locals.tokenInfo.userId);

    const result = await safenoteServices.getSafenotesService(safenoteId, userId);

    res.status(200).send(result);
}

export async function deleteSafenoteController(req: Request, res: Response) {
    const safenoteId = Number(req.params.safenoteId);
    const userId = Number(res.locals.tokenInfo.userId);

    await safenoteServices.deleteSafenoteService(safenoteId, userId);

    res.status(200).send('Safe note deleted with success!');
}