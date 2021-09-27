const staffModel = require("../../models/staff");
const staffDb = require("../../db/staff");
const Exceptions = require("../../utils/custom-exceptions");

async function listAllStaff(staffId) {
  return staffDb.allStaffMembers(staffId);
}

async function listStaffForDept(deptId) {
  return staffDb.staffMembersForDept(deptId);
}

async function listStaffForAttendence(deptId) {
  return staffDb.allStaffForTodayAttendence(deptId);
}

async function singleStaff(id) {
  return staffDb.singleStaff(id);
}

async function viewLeaveStatus(staffId) {
  return staffDb.viewLeaveStatus(staffId);
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

async function uploadAvatar(id, avatar) {
  return staffDb.uploadAvatar(id, { imagePath: avatar });
}

async function deleteStaff(id) {
  const deletedCount = await staffDb.deleteStaff(id);
  if (deletedCount === 0) {
    throw new Exceptions.BadRequest({ message: "Staff is not found" });
  }
}

module.exports = {
  createStaff,
  listAllStaff,
  singleStaff,
  updateStaff,
  listStaffForDept,
  uploadAvatar,
  deleteStaff,
  listStaffForAttendence,
  viewLeaveStatus,
};
