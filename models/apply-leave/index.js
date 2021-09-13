const buildMakeApplyLeave = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const createValidator = validator(validations.createApplyLeave);
const createApplyLeave = buildMakeApplyLeave(createValidator);

module.exports = { createApplyLeave };
