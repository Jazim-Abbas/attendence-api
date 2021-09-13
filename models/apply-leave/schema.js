const yup = require("yup");
const { APPLY_LEAVE_STATUS } = require("./contants");

const createApplyLeave = yup.object().shape({
  subject: yup.string().required(),
  description: yup.string().required(),
  fromDate: yup.date().required(),
  toDate: yup.date().required(),
  leaveCategory: yup.number().required(),
  staff: yup.number().required(),
});

const updateLeaveStatus = yup.object().shape({
  leaveStatus: yup.string().oneOf(Object.values(APPLY_LEAVE_STATUS)).required(),
});

module.exports = { createApplyLeave, updateLeaveStatus };
