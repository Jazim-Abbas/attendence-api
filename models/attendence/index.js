const buildMakeAttendence = require("./create");
const buildUpdateAttendence = require("./update");
const validator = require("../validator");
const validations = require("./schema");

const createValidator = validator(validations.createAttendence);
const createAttendence = buildMakeAttendence(createValidator);
const updateValidator = validator(validations.updateAttendence);
const updateAttendence = buildUpdateAttendence(updateValidator);

module.exports = { createAttendence, updateAttendence };
