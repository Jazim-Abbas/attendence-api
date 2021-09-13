const Exceptions = require("../../utils/custom-exceptions");

function createCategory(attendenceValidator) {
  return async ({ timeIn, staff }) => {
    const { error } = await attendenceValidator({ timeIn, staff });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid Attendence fields",
        errors: error,
      });
    }

    if (!timeIn) {
      const _date = new Date();
      timeIn = _date.getHours() + ":" + _date.getMinutes();
    }

    return {
      getTimein: () => timeIn,
      getStaffId: () => staff,
    };
  };
}

module.exports = createCategory;
