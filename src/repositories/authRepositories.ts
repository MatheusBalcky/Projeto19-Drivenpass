import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces'

export async function findByEmail(email: string) {
    const emailFinded = await prisma.users.findUnique( { where: {email} } );
    return emailFinded;
}

export async function insertNewUser(userData: interfaces.IuserAthenticationData) {
    await prisma.users.create( { data: userData} );
}