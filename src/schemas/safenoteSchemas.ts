import Joi from "joi";

export const safenoteDataSchema = Joi.object({
    title: Joi.string().max(50).required(),
    annotation: Joi.string().max(1000).required()
});