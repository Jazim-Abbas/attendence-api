const applyLeaveModel = require("../../models/apply-leave");

async function createApplyLeave(leaveFields) {
  const applyLeave = await applyLeaveModel.createApplyLeave({ ...leaveFields });
  const newApplyLeave = {
    subject: applyLeave.getSubject(),
    description: applyLeave.getDescription(),
    from: applyLeave.getFromDate(),
    to: applyLeave.getToDate(),
    leave_status: applyLeave.getLeaveStatus(),
    leave_category: applyLeave.getLeaveCategoryId(),
    staff: applyLeave.getStaffId(),
  };

  return newApplyLeave;
}

module.exports = { createApplyLeave };
