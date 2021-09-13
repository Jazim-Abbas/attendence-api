const _staff = require("../../data-access/staff");

async function index(_, res) {
  const staffMembers = await _staff.listAllStaff();
  res.send({ staffMembers });
}

async function create(req, res) {
  const staff = await _staff.createStaff(req.body);
  res.send({ staff });
}

module.exports = { create, index };
