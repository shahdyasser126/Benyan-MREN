
// require joi
const Joi = require("joi");

// joi schema
const loginSChema=Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(6).required(),
})

// Export
module.exports=loginSChema;