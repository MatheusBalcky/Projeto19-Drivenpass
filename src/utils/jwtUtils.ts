import jwt from 'jsonwebtoken';


export function createToken (payload: jwt.JwtPayload){
    const token = jwt.sign(payload, String(process.env.JWT_SECRET), { expiresIn: '24h' });
    return token;
}


export function verifyToken(token: string){
    try {
        const verifyToken =  jwt.verify(token, String(process.env.JWT_SECRET));
        return verifyToken;
    } catch (error) {
        return error;
    }
}