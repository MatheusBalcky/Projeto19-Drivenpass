import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces';

export async function insertNewSafenote(safenoteData: interfaces.safenoteToInsert) {
    return await prisma.safenotes.create( { data: safenoteData });
}

export async function getOneSafenoteById(safenoteId: number) {
    return await prisma.safenotes.findUnique( {where: { id: safenoteId}});
}

export async function getAllSafenotesByUserId(userId: number) {
    return  await prisma.safenotes.findMany({ where: { user_id: userId}});
}

export async function deleteSafenoteById(safenoteId: number) {
    return await prisma.safenotes.delete( { where: { id: safenoteId}});
}