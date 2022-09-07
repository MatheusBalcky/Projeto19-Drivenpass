import * as bcrypt from '../utils/bcryptUtils'
import * as authRepositories from '../repositories/authRepositories'
import * as interfaces from '../interfaces/interfaces'
import * as jwt from '../utils/jwtUtils';

export async function signUpService(userData: interfaces.IuserAthenticationData){

    await verifyEmail(userData.email, 'signup');
    
    await createNewUser(userData);
}

export async function signInService(userData: interfaces.IuserAthenticationData) {
    
    const userFounded = await verifyEmail(userData.email, 'signin');

    authenticatePassword(userData.password, userFounded!.password);

    const token = createToken(userFounded!.id);

    return token
}

async function verifyEmail(email: string, typeAuth: interfaces.typeAuthentication){
    const user = await authRepositories.findByEmail(email.toLowerCase());
    if(typeAuth === 'signup'){
        if(user){
            throw { type: 'conflict', message: 'E-mail already exists!'}
        }
    } else {
        if(!user){
            throw { type: 'not_found', message: 'E-mail not found!'}
        }
    }
    return user
}

async function createNewUser(userData: interfaces.IuserAthenticationData){
    const passwordEncrypt = bcrypt.hashPassword(userData.password);

    await authRepositories.insertNewUser({
        email: userData.email,
        password: passwordEncrypt
    });
}

function authenticatePassword(password: string, passwordCrypted: string){
    const result = bcrypt.comparePasswords(password, passwordCrypted);
    if(!result){
        throw { type: 'unauthorized', message: 'Invalid password!'}
    }
}

function createToken (userId: number){
    const tokenCreated = jwt.createToken({ userId});
    return tokenCreated;
}