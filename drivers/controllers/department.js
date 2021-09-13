const _department = require("../../data-access/department");

async function create(req, res) {
  const department = await _department.createDepartment(req.body);
  res.send({ department });
}

module.exports = { create };
