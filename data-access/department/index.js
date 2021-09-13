const departmentModel = require("../../models/department");
const departmentDb = require("../../db/department");

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

module.exports = { createDepartment };
