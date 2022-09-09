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
import { 
    createSafenoteMiddle,
    getSafenoteMiddle,
    deleteSafenoteMiddle } from "../middlewares/safenotesMiddle";
import { 
    createSafenoteController,
    getSafenoteController,
    deleteSafenoteController} from "../controllers/safenotesController";
import { 
    createCardMiddle,
    getCardMiddle,
    deleteCardMiddle } from "../middlewares/cardsMiddle";
import { 
    createCardController, 
    getCardController, 
    deleteCardController} from "../controllers/cardsController";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);


// * CREDENTIALS ROUTES
routes.post('/create-credential', createCredentialMiddle, createCredentialController); 
routes.get('/credentials', getCredentialsMiddle, getCredentialsController); 
routes.delete('/credentials/:credentialId', deleteCredentialsMiddle, deleteCredentialController);



// * SAFE NOTES ROUTES
routes.post('/create-safenote', createSafenoteMiddle, createSafenoteController); 
routes.get('/safenotes', getSafenoteMiddle, getSafenoteController ); 
routes.delete('/safenote/:safenoteId', deleteSafenoteMiddle, deleteSafenoteController); 



// * CARDS ROUTES
routes.post('/new-card', createCardMiddle, createCardController);
routes.get('/cards', getCardMiddle, getCardController ); 
routes.delete('/card/:cardId', deleteCardMiddle, deleteCardController); 




export default routes;