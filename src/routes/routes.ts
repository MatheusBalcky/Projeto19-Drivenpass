import { Router } from "express";
import { signUpController, signInController } from "../controllers/authController";
import { authMiddle } from "../middlewares/authMiddle";

const routes = Router();



//& Authenticantion routes
routes.post('/signup', authMiddle, signUpController);
routes.post('/signin', authMiddle, signInController);

//& Get records from the user
routes.get('/records');

//& Create new record
routes.post('/createRegister');







export default routes;