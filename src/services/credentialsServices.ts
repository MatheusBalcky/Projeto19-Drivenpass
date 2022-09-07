import * as interfaces from '../interfaces/interfaces';
import * as cryptr from '../utils/cryptrUtils';
import * as credentialsRepositories from '../repositories/credentialsRepositories'

export async function createCredentialService (userId: number, credentialData: interfaces.credentialData){

    const crendetialData = organizeDataToInsert(userId, credentialData);

    await credentialsRepositories.insertNewCredential(crendetialData);
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