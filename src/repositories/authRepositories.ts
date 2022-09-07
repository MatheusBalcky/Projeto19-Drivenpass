import prisma from "../database/database";
import * as interfaces from '../interfaces/interfaces'
import { users } from "@prisma/client";

export async function findByEmail(email: string){
    const userFinded = await prisma.users.findUnique( { where: {email} } );
    return userFinded;
}

export async function insertNewUser(userData: interfaces.IuserAthenticationData) {
    await prisma.users.create( { data: userData} );
}