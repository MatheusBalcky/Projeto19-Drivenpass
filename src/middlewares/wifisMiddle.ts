import { Request, Response, NextFunction } from 'express';
import * as jwt from '../utils/jwtUtils';
import { wifiSchema } from '../schemas/wifiSchemas';
import { wifiData } from '../interfaces/interfaces';

export async function newWifi(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));
    const wifiData: wifiData = req.body;

    const tokenInfo = jwt.validateToken(token);
    
    validateWifiData(wifiData);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function getWifis(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

export async function deleteWifi(req: Request, res: Response, next: NextFunction) {
    const token = String(req.headers.authorization?.replace('Bearer ', ''));

    const tokenInfo = jwt.validateToken(token);

    res.locals.tokenInfo = tokenInfo;

    next();
}

function validateWifiData(wifiData: wifiData){
    const { error } = wifiSchema.validate(wifiData, { abortEarly: false});
    if(error){
        throw { type: 'bad_request', message: error.details.map( item => item.message)}
    }
}
