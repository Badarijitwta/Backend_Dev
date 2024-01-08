const Joi = require("joi");

const userSchema = Joi.object().keys({
  age: Joi.number().integer().min(1).max(100),
  gender: Joi.string().valid("male", "female"),
});

const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;
  const result = userSchema.validate({ gender, age });
  if (result.error) {
    return res.status(502).json(result.error.message);
  }
  next();
};

module.exports = { validateSearchQuery };
