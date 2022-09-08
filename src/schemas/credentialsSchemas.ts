import Joi from "joi";

export const createCredentialSchema = Joi.object({
    title: Joi.string().max(50).required(),
    url: Joi.string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).required(),
    username: Joi.string().max(80).required(),
    password: Joi.string().required()
});