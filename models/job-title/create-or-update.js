const Exceptions = require("../../utils/custom-exceptions");

function createOrUpdateJobTitle(jobTitleValidator) {
  return async ({ jobTitle, allowedNoOfLeaves }) => {
    let { error } = await jobTitleValidator({
      jobTitle,
      allowedNoOfLeaves,
    });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid job title fields",
        errors: error,
      });
    }

    return {
      getJobTitle: () => jobTitle,
      getAllowedLeaves: () => allowedNoOfLeaves,
    };
  };
}

module.exports = createOrUpdateJobTitle;
