import Joi from "joi";

export const cardDataSchema = Joi.object({
    title: Joi.string().max(30).required(),
    numberCard: Joi.string().min(13).max(16).pattern(/^[0-9]+$/).required(),
    nameCard: Joi.string().max(30).required(),
    cvcCard: Joi.string().length(3).pattern(/^[0-9]+$/).required(),
    expirationDate: Joi.date().required(),
    password: Joi.string().max(12).required(),
    isVirtual: Joi.boolean(),
});