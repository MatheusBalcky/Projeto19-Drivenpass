import * as safenotesRepositories from '../repositories/safenotesRepositories'
import * as interfaces from '../interfaces/interfaces';

export async function createSafenoteService(safenoteData: interfaces.safenoteData , userId: number) {
    await safenotesRepositories.insertNewSafenote({ user_id: userId, ...safenoteData});
}

export async function getSafenotesService(safenoteId: number | null, userId: number) {
    if(!safenoteId){
        const result = await safenotesRepositories.getAllSafenotesByUserId(userId);
        return result
    }
    
    const result = await getOneSafenoteByIdAndVerify(safenoteId!, userId);
    return (result);
}

export async function deleteSafenoteService(safenoteId: number, userId: number) {
    await getOneSafenoteByIdAndVerify(safenoteId, userId);

    await safenotesRepositories.deleteSafenoteById(safenoteId);
}




async function getOneSafenoteByIdAndVerify(credentialId: number, userId: number) {
    const result = await safenotesRepositories.getOneSafenoteById(credentialId);
    
    if(!result){
        throw { type: 'not_found', message: 'Safe note not found!'}
    }

    if(result!.user_id !== userId){
        throw { type: 'unauthorized', message: 'This safe note is not yours!'}
    }

    return result;
}