const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            birthdate: Joi.date().required(),
            address: Joi.string().required(),
            bio: Joi.string().optional(),
            password: Joi.string().required,

        })
    }),
    getById: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required()
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().optional(),
            email: Joi.string().email().optional()
        })
            .min(1)
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
};