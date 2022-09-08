import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces';

export async function insertNewSafenote(safenoteData: interfaces.safenoteToInsert) {
    const result = await prisma.safenotes.create( { data: safenoteData });
    return result;
}

export async function getOneSafenoteById(safenoteId: number) {
    const result = await prisma.safenotes.findUnique( {where: { id: safenoteId}});
    return result
}

export async function getAllSafenotesByUserId(userId: number) {
    const result = await prisma.safenotes.findMany({ where: { user_id: userId}});
    return result
}

export async function deleteSafenoteById(safenoteId: number) {
    const result = await prisma.safenotes.delete( { where: { id: safenoteId}});
    return result;
}