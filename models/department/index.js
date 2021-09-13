const buildMakeDepartment = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const departmentValidator = validator(validations.departmentSchema);
const createDepartment = buildMakeDepartment(departmentValidator);

module.exports = { createDepartment };
