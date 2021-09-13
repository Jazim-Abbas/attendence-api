const Exceptions = require("../../utils/custom-exceptions");
const { APPLY_LEAVE_STATUS } = require("./contants");

function createDepartment(applyLeaveValidator) {
  return async ({
    subject,
    description,
    fromDate,
    toDate,
    leaveCategory,
    staff,
  }) => {
    const { error } = await applyLeaveValidator({
      subject,
      description,
      fromDate,
      toDate,
      leaveCategory,
      staff,
    });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid apply leave fields",
        errors: error,
      });
    }

    return {
      getSubject: () => subject,
      getDescription: () => description,
      getFromDate: () => new Date(fromDate),
      getToDate: () => new Date(toDate),
      getLeaveCategoryId: () => leaveCategory,
      getStaffId: () => staff,
      getLeaveStatus: () => APPLY_LEAVE_STATUS.pending,
    };
  };
}

module.exports = createDepartment;
