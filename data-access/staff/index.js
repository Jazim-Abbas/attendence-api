const staffModel = require("../../models/staff");
const staffDb = require("../../db/staff");

async function listAllStaff() {
  return staffDb.allStaffMembers();
}

async function listStaffForDept(deptId) {
  return staffDb.staffMembersForDept(deptId);
}

async function singleStaff(id) {
  return staffDb.singleStaff(id);
}

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

async function updateStaff(id, staffFields) {
  const staff = await staffModel.updateStaff({ ...staffFields });
  const updatedStaff = {
    firstName: staff.getFirstName(),
    lastName: staff.getLastName(),
    email: staff.getEmail(),
    gender: staff.getGender(),
    joinginDate: staff.getJoiningDate(),
    dob: staff.getDateOfBirth(),
    phone: staff.getPhoneNo(),
    address: staff.getAddress(),
    department: staff.getDepartmentId(),
    jobTitle: staff.getJobTitleId(),
  };

  return staffDb.updateStaff(id, updatedStaff);
}

module.exports = {
  createStaff,
  listAllStaff,
  singleStaff,
  updateStaff,
  listStaffForDept,
};
