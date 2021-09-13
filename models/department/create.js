const Exceptions = require("../../utils/custom-exceptions");

function createDepartment(deptValidator) {
  return async ({ name, phone, email, address }) => {
    const { error } = await deptValidator({ name, phone, email, address });

    if (error) {
      throw new Exceptions.ValidationError({
        message: "Invalid department fields",
        errors: error,
      });
    }

    return {
      getName: () => name,
      getPhoneNo: () => phone,
      getEmail: () => email,
      getAddress: () => address,
    };
  };
}

module.exports = createDepartment;
