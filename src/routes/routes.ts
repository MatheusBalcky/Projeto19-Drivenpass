import { Router } from "express";

const routes = Router();

// autenticar password
routes.post('/signin');

routes.post('/signup');

// autenticada
routes.get('/records');

routes.post('/createRegister')


export default routes;