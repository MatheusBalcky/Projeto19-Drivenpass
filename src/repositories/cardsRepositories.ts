import { cards } from "@prisma/client";
import prisma from "../database/database";

export async function insertNewCard(cardData: Omit<cards, 'id'>) {
    await prisma.cards.create({data: cardData});
}

export async function getAllCardsByUserId(userId: number) {
    return await prisma.cards.findMany({where: {user_id: userId}});
}

export async function getOneCardById(cardId: number) {
    return await prisma.cards.findUnique({where: {id: cardId}});
}

export async function deleteCardById(cardId: number) {
    return await prisma.cards.delete({where: {id: cardId}});
}