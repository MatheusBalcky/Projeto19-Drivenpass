import Joi from 'joi';

export const wifiSchema = Joi.object({
    title: Joi.string().max(30).required(),
    wifiName: Joi.string().max(30).required(),
    password: Joi.string().required()
})