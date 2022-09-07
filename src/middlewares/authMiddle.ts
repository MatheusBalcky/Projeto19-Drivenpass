import { authSchema } from "../schemas/authSchemas";
import { Request, Response, NextFunction } from "express";

interface userInput {
    email: string;
    password: string
}

export async function authMiddle(req: Request, res: Response, next: NextFunction) {
    const userInput: userInput = req.body;

    validateUserInput(userInput);

    next()
}


function validateUserInput(userInput: userInput){
    const { error } = authSchema.validate(userInput);
    if(error){
        throw { type: 'bad_request', message: error.details[0].message}
    }
}