const buildMakeLogin = require("./login");
const validator = require("../validator");
const validations = require("./schema");

const loginValidator = validator(validations.loginSchema);
const makeLogin = buildMakeLogin(loginValidator);

module.exports = { makeLogin };
