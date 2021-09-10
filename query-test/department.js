const departmentDb = require("../db/department");

async function main() {
  await update(1);
}

async function index() {
  const listDepts = await departmentDb.allDepartments();
  console.log("list all depts: ", listDepts);
}

async function show(id) {
  const singleDept = await departmentDb.singleDepartment(id);
  console.log("singleDept: ", singleDept);
}

async function create() {
  const department = await departmentDb.createDepartment({
    name: "Software Department",
    phone: "03310866442",
  });
  console.log("newly created dept: ", department);
}

async function update(id) {
  const dept = await departmentDb.updateDepartment(id, {
    email: "jazim@gmail.com"
  });
  console.log("updated department: ", dept);
}

main();
