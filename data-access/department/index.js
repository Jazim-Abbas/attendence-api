const departmentModel = require("../../models/department");
const departmentDb = require("../../db/department");

async function listAllDepartments() {
  return departmentDb.allDepartments();
}

async function singleDepartment(id) {
  return departmentDb.singleDepartment(id);
}

async function createDepartment(deptFields) {
  const dept = await departmentModel.createDepartment({ ...deptFields });
  const newDept = {
    name: dept.getName(),
    phone: dept.getPhoneNo(),
    email: dept.getEmail(),
    address: dept.getAddress(),
  };

  return departmentDb.createDepartment(newDept);
}

async function updateDepartment(id, deptFields) {
  const dept = await departmentModel.updateDepartment({ ...deptFields });
  const updatedDept = {
    name: dept.getName(),
    phone: dept.getPhoneNo(),
    email: dept.getEmail(),
    address: dept.getAddress(),
  };

  return departmentDb.updateDepartment(id, updatedDept);
}

module.exports = {
  createDepartment,
  listAllDepartments,
  updateDepartment,
  singleDepartment,
};
