const _staff = require("../../data-access/staff");
const Exceptions = require("../../utils/custom-exceptions");

async function index(req, res) {
  const staffMembers = await _staff.listAllStaff(req.user.id);
  res.send({ staffMembers });
}

async function deptStaffMembers(req, res) {
  const staffMembers = await _staff.listStaffForDept(+req.params.deptId);
  res.send({ staffMembers });
}

async function staffMembersForAttendence(req, res) {
  const staffMembers = await _staff.listStaffForAttendence(+req.params.deptId);
  res.send({ staffMembers });
}

async function show(req, res) {
  const staff = await _staff.singleStaff(+req.params.id);
  res.send({ staff });
}

async function viewLeaveStatus(req, res) {
  const leaveStatus = await _staff.viewLeaveStatus(+req.params.id);
  res.send({ leaveStatus });
}

async function create(req, res) {
  const staff = await _staff.createStaff(req.body);
  res.send({ staff });
}

async function update(req, res) {
  const staff = await _staff.updateStaff(+req.params.id, req.body);
  res.send({ staff });
}

async function uploadImage(req, res) {
  if (!req.file) {
    throw new Exceptions.BadRequest({ message: "Please upload image" });
  }

  await _staff.uploadAvatar(+req.params.id, req.file.filename);
  res.send({ message: "Successfully upload image" });
}

async function drop(req, res) {
  await _staff.deleteStaff(+req.params.id);
  res.send({ message: "Staff is deleted successfully" });
}

module.exports = {
  create,
  index,
  show,
  update,
  deptStaffMembers,
  uploadImage,
  drop,
  staffMembersForAttendence,
  viewLeaveStatus,
};
