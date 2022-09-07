import { Request, Response } from "express";
import * as authServices from '../services/authServices'
import * as interfaces from '../interfaces/interfaces'


export async function signUpController(req: Request, res: Response) {
    const userInput: interfaces.IuserAthenticationData = req.body;

    await authServices.signUpService(userInput);

    res.sendStatus(201);
}

export async function signInController(req: Request, res: Response) {
    


    res.sendStatus(200);
}