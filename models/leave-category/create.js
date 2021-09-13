const Exceptions = require("../../utils/custom-exceptions");

function createCategory(categoryValidator) {
  return async ({ name }) => {
    const { error } = await categoryValidator({ name });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid Leave Category fields",
        errors: error,
      });
    }

    return {
      getName: () => name,
    };
  };
}

module.exports = createCategory;
