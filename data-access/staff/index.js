const staffModel = require("../../models/staff");
const staffDb = require("../../db/staff");

async function createStaff(staffFields) {
  const staff = await staffModel.createStaff({ ...staffFields });
  const newStaff = {
    firstName: staff.getFirstName(),
    lastName: staff.getLastName(),
    email: staff.getEmail(),
    password: await staff.makeHashPassword(),
    gender: staff.getGender(),
    joinginDate: staff.getJoiningDate(),
    dob: staff.getDateOfBirth(),
    phone: staff.getPhoneNo(),
    address: staff.getAddress(),
    department: staff.getDepartmentId(),
    jobTitle: staff.getJobTitleId(),
  };

  return staffDb.createStaff(newStaff);
}

module.exports = { createStaff };
