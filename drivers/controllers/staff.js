const _staff = require("../../data-access/staff");
const Exceptions = require("../../utils/custom-exceptions");

async function index(_, res) {
  const staffMembers = await _staff.listAllStaff();
  res.send({ staffMembers });
}

async function deptStaffMembers(req, res) {
  const staffMembers = await _staff.listStaffForDept(+req.params.deptId);
  res.send({ staffMembers });
}

async function show(req, res) {
  const staff = await _staff.singleStaff(+req.params.id);
  res.send({ staff });
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

module.exports = { create, index, show, update, deptStaffMembers, uploadImage };
