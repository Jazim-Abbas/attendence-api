const buildMakeAttendence = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const createValidator = validator(validations.createAttendence);
const createAttendence = buildMakeAttendence(createValidator);

module.exports = { createAttendence };
