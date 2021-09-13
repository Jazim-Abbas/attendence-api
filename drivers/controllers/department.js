const _department = require("../../data-access/department");

async function index(_, res) {
  const departments = await _department.listAllDepartments();
  res.send({ departments });
}

async function create(req, res) {
  const department = await _department.createDepartment(req.body);
  res.send({ department });
}

module.exports = { create, index };
