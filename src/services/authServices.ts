import * as bcrypt from '../utils/bcryptUtils'
import * as authRepositories from '../repositories/authRepositories'
import * as interfaces from '../interfaces/interfaces'

export async function signUpService(userData: interfaces.IuserAthenticationData){

    await verifyEmail(userData.email);
    
    await createNewUser(userData);
}

async function verifyEmail(email: string){
    const getEmail = await authRepositories.findByEmail(email.toLowerCase());
    if(getEmail){
        throw { type: 'conflict', message: 'Email already exists!'}
    }
}

async function createNewUser(userData: interfaces.IuserAthenticationData){
    const passwordEncrypt = bcrypt.hashPassword(userData.password);

    await authRepositories.insertNewUser({
        email: userData.email,
        password: passwordEncrypt
    });
}