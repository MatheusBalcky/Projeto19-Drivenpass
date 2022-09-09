import { Request, Response } from 'express';
import { wifiData } from '../interfaces/interfaces';
import * as wifiServices from '../services/wifiServices'

export async function newWifi(req: Request, res: Response) {
    const userId  = Number(res.locals.tokenInfo.userId);
    const wifiData: wifiData = req.body;

    await wifiServices.newWifi(wifiData, userId);
    
    res.status(201).send('New wifi created with success!');
}

export async function getWifis(req: Request, res: Response) {
    const wifiId = Number(req.query.id);
    const userId = Number(res.locals.tokenInfo.userId);

    const result = await wifiServices.getWifisService(wifiId, userId)

    res.status(200).send(result);
}

export async function deleteWifi(req: Request, res: Response) {
    const wifiId = Number(req.params.wifiId);
    const userId = Number(res.locals.tokenInfo.userId);

    await wifiServices.deleteWifi(wifiId, userId);

    res.status(200).send('Wifi deleted wif success!');
}