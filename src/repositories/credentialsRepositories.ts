import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces';


export async function insertNewCredential(credentialData: interfaces.credentialsToInsert) {
    const result = await prisma.credentials.create( { data: credentialData });
    return result;
}