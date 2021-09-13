const buildMakeStaff = require("./create");
const validator = require("../validator");
const validations = require("./schema");
const hashPassword = require("./hash-password.util");

const createValidator = validator(validations.staffSchema);
const createStaff = buildMakeStaff(createValidator)(hashPassword);

module.exports = { createStaff };
