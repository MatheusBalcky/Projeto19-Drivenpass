import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';
import * as credentialSchemas from '../schemas/credentialsSchemas'
import * as interfaces from '../interfaces/interfaces'

export async function createCredentialMiddle(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));
    const credentialData = req.body;

    const tokenInfo = validateToken(token);
    
    validateCrendentialData(credentialData);

    res.locals.tokenInfo = tokenInfo;

    next();
}

function validateToken(token: string) {
    const result = jwt.verifyToken(token);
    if(!result){
        throw { type: 'unauthorized', message: 'Invalid token!'}
    }
    return result
}

function validateCrendentialData(credentialData: interfaces.credentialData){
    const { error } = credentialSchemas.createCredentialSchema.validate(credentialData, { abortEarly: false});
    if(error){
        throw { type: 'bad_request', message: error.details.map( item => item.message)}
    }
}