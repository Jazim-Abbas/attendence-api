const buildMakeCategory = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const createCategoryValidator = validator(validations.createCategory);
const createCategory = buildMakeCategory(createCategoryValidator);
const updateCategoryValidator = validator(validations.updateCategory);
const updateCategory = buildMakeCategory(updateCategoryValidator);

module.exports = { createCategory, updateCategory };
