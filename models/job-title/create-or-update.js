const Exceptions = require("../../utils/custom-exceptions");

function createOrUpdateJobTitle(jobTitleValidator) {
  return async ({ jobTitle, allowedLeaves }) => {
    let { error } = await jobTitleValidator({
      jobTitle,
      allowedLeaves,
    });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid job title fields",
        errors: error,
      });
    }

    return {
      getJobTitle: () => jobTitle,
      getAllowedLeaves: () => allowedLeaves,
    };
  };
}

module.exports = createOrUpdateJobTitle;
