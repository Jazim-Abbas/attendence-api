const _department = require("../../data-access/department");

async function index(_, res) {
  const departments = await _department.listAllDepartments();
  res.send({ departments });
}

async function create(req, res) {
  const department = await _department.createDepartment(req.body);
  res.send({ department });
}

async function update(req, res) {
  const department = await _department.updateDepartment(
    +req.params.id,
    req.body
  );
  res.send({ department });
}

module.exports = { create, index, update };
