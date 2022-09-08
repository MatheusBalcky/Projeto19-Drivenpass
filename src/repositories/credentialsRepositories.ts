import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces';


export async function getOneCredentialById(credentialId: number) {
    const result = await prisma.credentials.findUnique( { where: { id: credentialId } });
    return result;
}

export async function getAllCredentialsByUserId(userId: number) {
    const result = await prisma.credentials.findMany( { where: { user_id: userId } });
    return result;
}

export async function insertNewCredential(credentialData: interfaces.credentialsToInsert) {
    const result = await prisma.credentials.create( { data: credentialData });
    return result;
}

export async function deleteCredentialById(credentialId: number) {
    const result = await prisma.credentials.delete( { where: { id: credentialId}});
    return result;
}