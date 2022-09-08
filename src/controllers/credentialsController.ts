import { Request, Response } from 'express';
import * as crendentialsServices from '../services/credentialsServices'

export async function createCredentialController(req: Request, res: Response) {
    const { userId } = res.locals.tokenInfo;
    const credentialData = req.body;

    await crendentialsServices.createCredentialService(userId, credentialData);

    return res.status(201).send('Crendential created successfully.');
}

export async function getCredentialsController (req: Request, res: Response) {
    const credentialId = Number(req.query.id);
    const userId = Number(res.locals.tokenInfo.userId);

    const result = await crendentialsServices.getCredentialsService(credentialId, userId);

    res.status(200).send(result);
}