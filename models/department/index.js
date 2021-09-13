const buildMakeDepartment = require("./create");
const validator = require("../validator");
const validations = require("./schema");

const departmentValidator = validator(validations.departmentSchema);
const updateDeptValidator = validator(validations.updateDeptSchema);
const createDepartment = buildMakeDepartment(departmentValidator);
const updateDepartment = buildMakeDepartment(updateDeptValidator);

module.exports = { createDepartment, updateDepartment };
