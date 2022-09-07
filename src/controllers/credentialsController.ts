import { Request, Response } from 'express';
import * as crendentialsServices from '../services/credentialsServices'

export async function createCredentialController(req: Request, res: Response) {
    const { userId } = res.locals.tokenInfo;
    const credentialData = req.body;

    await crendentialsServices.createCredentialService(userId, credentialData);

    return res.status(201).send('Crendential created successfully.');
}