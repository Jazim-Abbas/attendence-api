const buildMakeCategory = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const createCategoryValidator = validator(validations.createCategory);
const createCategory = buildMakeCategory(createCategoryValidator);

module.exports = { createCategory };
