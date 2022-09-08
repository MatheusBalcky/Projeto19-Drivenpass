import { Router } from "express";
import { signUpController, signInController } from "../controllers/authController";
import { authMiddle } from "../middlewares/authMiddle";
import { 
    createCredentialController,
    getCredentialsController,
    deleteCredentialController } from "../controllers/credentialsController";
import { 
    createCredentialMiddle,
    getCredentialsMiddle,
    deleteCredentialsMiddle } from "../middlewares/credentialsMiddle";
import { createSafenoteMiddle, getSafenoteMiddle, deleteSafenoteMiddle } from "../middlewares/safenotesMiddle";
import { createSafenoteController, getSafenoteController, deleteSafenoteController} from "../controllers/safenotesController";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);


// * CREDENTIALS ROUTES
routes.post('/create-credential', createCredentialMiddle, createCredentialController); //& Route to create a new credential in the database by the user
routes.get('/credentials', getCredentialsMiddle, getCredentialsController); //& Get credentials by id or not (all credentials)
routes.delete('/credentials/:credentialId', deleteCredentialsMiddle, deleteCredentialController); //& Delete credential by id


// * SAFE NOTES ROUTES
routes.post('/create-safenote', createSafenoteMiddle, createSafenoteController); //& Route to create a new safe note in the database by the user
routes.get('/safenotes', getSafenoteMiddle, getSafenoteController ); //& Get safe notes by id or not (all credentials)
routes.delete('/safenote/:safenoteId', deleteSafenoteMiddle, deleteSafenoteController); //& Delete safe note by id







export default routes;