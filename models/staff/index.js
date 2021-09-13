const buildMakeStaff = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const createValidator = validator(validations.staffSchema);
const createStaff = buildMakeStaff(createValidator);

module.exports = { createStaff };
