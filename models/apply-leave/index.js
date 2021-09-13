const buildMakeApplyLeave = require("./create");
const buildUpdateLeaveStatus = require("./update-leave-status");
const validator = require("../validator");
const validations = require("./schema");

const createValidator = validator(validations.createApplyLeave);
const createApplyLeave = buildMakeApplyLeave(createValidator);
const leaveStatusValidator = validator(validations.updateLeaveStatus);
const updateLeaveStatus = buildUpdateLeaveStatus(leaveStatusValidator);

module.exports = { createApplyLeave, updateLeaveStatus };
