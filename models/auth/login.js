const Exceptions = require("../../utils/custom-exceptions");

function login(loginValidator) {
  return async ({ email, password }) => {
    const { error } = await loginValidator({ email, password });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid login fields",
        errors: error,
      });
    }

    return {
      getEmail: () => email,
      getPassword: () => password,
    };
  };
}

module.exports = login;
