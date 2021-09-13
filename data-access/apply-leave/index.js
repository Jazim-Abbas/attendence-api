const applyLeaveModel = require("../../models/apply-leave");
const applyLeaveDb = require("../../db/apply-leave");

async function createApplyLeave(leaveFields) {
  const applyLeave = await applyLeaveModel.createApplyLeave({ ...leaveFields });
  const newApplyLeave = {
    subject: applyLeave.getSubject(),
    description: applyLeave.getDescription(),
    from: applyLeave.getFromDate(),
    to: applyLeave.getToDate(),
    leaveStatus: applyLeave.getLeaveStatus(),
    leaveCategory: applyLeave.getLeaveCategoryId(),
    staff: applyLeave.getStaffId(),
  };

  return applyLeaveDb.createApplyLeave(newApplyLeave);
}

async function updateLeaveStatus(id, leaveFields) {
  const applyLeave = await applyLeaveModel.updateLeaveStatus({
    ...leaveFields,
  });
  const updatedLeave = {
    leaveStatus: applyLeave.getLeaveStatus(),
  };

  return applyLeaveDb.updateLeaveStatus(id, updatedLeave);
}

module.exports = { createApplyLeave, updateLeaveStatus };
