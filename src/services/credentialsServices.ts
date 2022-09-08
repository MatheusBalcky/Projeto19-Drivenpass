import * as interfaces from '../interfaces/interfaces';
import * as cryptr from '../utils/cryptrUtils';
import * as credentialsRepositories from '../repositories/credentialsRepositories'

export async function createCredentialService (userId: number, credentialData: interfaces.credentialData){

    const crendetialData = organizeDataToInsert(userId, credentialData);

    await credentialsRepositories.insertNewCredential(crendetialData);
}

export async function getCredentialsService(credentialId: number | null, userId: number) {
    if(!credentialId){
        const result = await credentialsRepositories.getAllCredentialsByUserId(userId);
        return decryptPassword(result);
    }
    
    const result = await getOneCredentialById(credentialId!, userId);
    return decryptPassword([result]);
}

function organizeDataToInsert(userId: number, credentialData: interfaces.credentialData): interfaces.credentialsToInsert{
    const dataToInsert = {
        user_id: userId,
        title: credentialData.title,
        url: credentialData.url,
        username: credentialData.username,
        password: cryptr.encryptByCryptr(credentialData.password)
    }
    return dataToInsert;
}

async function getOneCredentialById(credentialId: number, userId: number) {
    const result = await credentialsRepositories.getOneCredentialById(credentialId);
    
    if(!result){
        throw { type: 'not_found', message: 'Credential not found!'}
    }

    if(result!.user_id !== userId){
        throw { type: 'unauthorized', message: 'This crendential is not yours!'}
    }

    return result;
}

function decryptPassword(data: object[]){
    const result = data.map( (item: any) =>{
        return {
            ...item,
            password: cryptr.decryptByCryptr(item.password)
        }
    });
    return result
}