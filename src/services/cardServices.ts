import { cardToInsert } from '../interfaces/interfaces';
import * as cardsRepositoreis from '../repositories/cardsRepositories'
import * as cryptr from '../utils/cryptrUtils'

export async function createCardService (userId: number, cardData: cardToInsert){

    const cardCrypted = cryptCardData(cardData);

    await cardsRepositoreis.insertNewCard({ user_id: userId, ...cardCrypted});
}

export async function getCardsService(cardId: number | null, userId: number) {
    if(!cardId){
        const result = await cardsRepositoreis.getAllCardsByUserId(userId);
        return decryptPassword(result);
    }
    
    const result = await getOneCardByIdAndVerify(cardId!, userId);
    return decryptPassword([result]);
}

export async function deleteCardService(cardId: number, userId: number) {
    
    await getOneCardByIdAndVerify(cardId, userId);

    await cardsRepositoreis.deleteCardById(cardId);
}


function cryptCardData (cardData: cardToInsert){
    const cardCrypted = {
        ...cardData,
        cvcCard: cryptr.encryptByCryptr(cardData.cvcCard),
        password: cryptr.encryptByCryptr(cardData.password)
    }
    return cardCrypted;
}


async function getOneCardByIdAndVerify(cardId: number, userId: number) {
    const result = await cardsRepositoreis.getOneCardById(cardId);
    
    if(!result){
        throw { type: 'not_found', message: 'Card not found!'}
    }

    if(result!.user_id !== userId){
        throw { type: 'unauthorized', message: 'This card is not yours!'}
    }

    return result;
}


function decryptPassword(data: object[]){
    const result = data.map( (item: any) =>{
        return {
            ...item,
            password: cryptr.decryptByCryptr(item.password),
            cvcCard: cryptr.decryptByCryptr(item.cvcCard)
        }
    });
    return result
}