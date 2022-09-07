import { Router } from "express";
import { signUpController, signInController } from "../controllers/authController";
import { authMiddle } from "../middlewares/authMiddle";
import { tokenMiddleware } from "../middlewares/tokenMiddleware";
import { createCredential } from "../controllers/credentialsController";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);

//& Get records from the user
routes.post('/createCredential', tokenMiddleware, createCredential);

//& Create new record
routes.post('/createRegister');







export default routes;