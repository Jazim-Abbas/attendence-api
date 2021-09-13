const Exceptions = require("../../utils/custom-exceptions");

function updateLeaveStatus(applyLeaveValidator) {
  return async ({ leaveStatus }) => {
    const { error } = await applyLeaveValidator({ leaveStatus });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid apply leave fields",
        errors: error,
      });
    }

    return {
      getLeaveStatus: () => leaveStatus,
    };
  };
}

module.exports = updateLeaveStatus;
