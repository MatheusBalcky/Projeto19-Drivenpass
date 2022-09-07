import { Router } from "express";
import { signUpController, signInController } from "../controllers/authController";
import { authMiddle } from "../middlewares/authMiddle";
import { createCredentialController } from "../controllers/credentialsController";
import { createCredentialMiddle } from "../middlewares/createCredentialMiddle";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);


//& Get records from the user
routes.post('/createCredential', createCredentialMiddle, createCredentialController);


//& Create new record
routes.post('/createRegister');







export default routes;