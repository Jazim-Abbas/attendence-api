const buildJobTitle = require("./create-or-update");
const validator = require("../validator");
const validations = require("./schema");

const jobTitleSchema = validator(validations.jobTitleSchema);
const makeOrUpdateJobTitle = buildJobTitle(jobTitleSchema);

module.exports = { makeOrUpdateJobTitle };
