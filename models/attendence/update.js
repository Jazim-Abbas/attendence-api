const Exceptions = require("../../utils/custom-exceptions");

function updateAttendence(attendenceValidator) {
  return async ({ timeOut, staff }) => {
    const { error } = await attendenceValidator({ timeOut, staff });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid Attendence fields",
        errors: error,
      });
    }

    if (!timeOut) {
      const _date = new Date();
      timeOut = _date.getHours() + ":" + _date.getMinutes();
    }

    return {
      getTimeout: () => timeOut,
      getStaffId: () => staff,
    };
  };
}

module.exports = updateAttendence;
