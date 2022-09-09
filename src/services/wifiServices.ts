import { wifiData } from '../interfaces/interfaces';
import * as wifiRepositories from '../repositories/wifiRepositories'
import * as cryptr from '../utils/cryptrUtils'

export async function newWifi(wifiData: wifiData, userId: number) {
    
    const wifiCrypted = cryptWifiData(wifiData);

    return await wifiRepositories.insertWifi({ user_id: userId, ...wifiCrypted});
}

export async function getWifisService(wifiId: number | null, userId: number) {
    if(!wifiId){
        const result = await wifiRepositories.getAllWifisByUserId(userId);
        return decryptWifiData(result)
    }
    const result = await getOneWifiAndVerify(wifiId!, userId);
    return decryptWifiData([result]);
}

export async function deleteWifi(wifiId: number, userId: number) {
    await getOneWifiAndVerify(wifiId, userId);
    await wifiRepositories.deleteWifi(wifiId);
}




async function getOneWifiAndVerify(wifiId: number, userId: number) {
    const result = await wifiRepositories.getOneWifiById(wifiId);
    
    if(!result){
        throw { type: 'not_found', message: 'Wifi not found!'}
    }
    if(result!.user_id !== userId){
        throw { type: 'unauthorized', message: 'This wifi is not yours!'}
    }

    return result;
}
function cryptWifiData (wifiData: wifiData){
    const wifiCrypted = {
        ...wifiData,
        password: cryptr.encryptByCryptr(wifiData.password)
    }
    return wifiCrypted;
}
function decryptWifiData(data: object[]){
    const result = data.map( (item: any) =>{
        return {
            ...item,
            password: cryptr.decryptByCryptr(item.password),
        }
    });
    return result
}