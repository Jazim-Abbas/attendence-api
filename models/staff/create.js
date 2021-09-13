const Exceptions = require("../../utils/custom-exceptions");

function createStaff(staffValidator) {
  return async ({
    firstName,
    lastName,
    email,
    password,
    gender,
    joinginDate,
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
      joinginDate,
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
      getPassword: () => password,
      getGender: () => gender,
      getJoiningDate: () => joinginDate,
      getDateOfBirth: () => dob,
      getPhoneNo: () => phone,
      getAddress: () => address,
      getDepartmentId: () => department,
      getJobTitleId: () => jobTitle,
    };
  };
}

module.exports = createStaff;
