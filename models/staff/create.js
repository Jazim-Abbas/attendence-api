const Exceptions = require("../../utils/custom-exceptions");

function createStaff(staffValidator) {
  return (hashPassword) => {
    return async ({
      firstName,
      lastName,
      email,
      password,
      gender,
      joiningDate,
      dob,
      phone,
      address,
      department,
      jobTitle,
    }) => {
      const { error } = await staffValidator({
        firstName,
        lastName,
        email,
        password,
        gender,
        joiningDate,
        dob,
        phone,
        address,
        department,
        jobTitle,
      });

      if (error) {
        throw new Exceptions.ValidationError({
          message: "Invalid staff fields",
          errors: error,
        });
      }

      return {
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getEmail: () => email,
        getGender: () => gender,
        getJoiningDate: () => joiningDate,
        getDateOfBirth: () => dob,
        getPhoneNo: () => phone,
        getAddress: () => address,
        getDepartmentId: () => department,
        getJobTitleId: () => jobTitle,
        makeHashPassword: () => hashPassword(password),
      };
    };
  };
}

module.exports = createStaff;
