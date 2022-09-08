import { Router } from "express";
import { signUpController, signInController } from "../controllers/authController";
import { authMiddle } from "../middlewares/authMiddle";
import { createCredentialController, getCredentialsController, deleteCredentialController } from "../controllers/credentialsController";
import { createCredentialMiddle, getCredentialsMiddle, deleteCredentialsMiddle } from "../middlewares/credentialsMiddle";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);


//& Get records from the user
routes.post('/createCredential', createCredentialMiddle, createCredentialController);


//& Get credentials by id or not
routes.get('/credentials', getCredentialsMiddle, getCredentialsController);


//& Delete credential by id
routes.delete('/credentials/:credentialId', deleteCredentialsMiddle, deleteCredentialController);






export default routes;