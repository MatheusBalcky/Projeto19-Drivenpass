import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';
import * as credentialSchemas from '../schemas/credentialsSchemas'
import * as interfaces from '../interfaces/interfaces'

export async function createCredentialMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));
    const credentialData = req.body;

    const tokenInfo = jwt.validateToken(token);
    
    validateCrendentialData(credentialData);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function getCredentialsMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function deleteCredentialsMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}




function validateCrendentialData(credentialData: interfaces.credentialData){
    const { error } = credentialSchemas.createCredentialSchema.validate(credentialData, { abortEarly: false});
    if(error){
        throw { type: 'bad_request', message: error.details.map( item => item.message)}
    }
}