const buildMakeStaff = require("./create");
const buildUpdateStaff = require("./update");
const validator = require("../validator");
const validations = require("./schema");
const hashPassword = require("./hash-password.util");

const createValidator = validator(validations.staffSchema);
const createStaff = buildMakeStaff(createValidator)(hashPassword);
const updateValidator = validator(validations.updateStaffSchema);
const updateStaff = buildUpdateStaff(updateValidator);

module.exports = { createStaff, updateStaff };
