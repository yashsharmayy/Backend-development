const { body, validationResult } = require("express-validator");

async function validateResult(req, res, next) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      error: error.array(),
    });
  }
  next();
}

const registeruserValidationRules = [
  body("userName")
    .isString()
    .withMessage("userName should be string")
    .isLength({ min: 3, max: 20 })
    .withMessage("userName must be between 3 to 20 characters"),

  body("email").isEmail().withMessage("Ivalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Pawssword must be at least 6 characters long"),

  validateResult,
];

module.exports = registeruserValidationRules;
