const departmentModel = require("../../models/department");

async function createDepartment(deptFields) {
  const dept = await departmentModel.createDepartment({ ...deptFields });
  const newDept = {
    name: dept.getName(),
    phone: dept.getPhoneNo(),
    email: dept.getEmail(),
    address: dept.getAddress(),
  };

  return newDept;
}

module.exports = { createDepartment };
