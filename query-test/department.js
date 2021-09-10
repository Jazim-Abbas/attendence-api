const departmentDb = require("../db/department");

async function main() {
  await show();
}

async function index() {
  const listDepts = await departmentDb.allDepartments();
  console.log("list all depts: ", listDepts);
}

async function show() {
  const singleDept = await departmentDb.singleDepartment(1);
  console.log("singleDept: ", singleDept);
}

async function create() {
  const department = await departmentDb.createDepartment({
    name: "Software Department",
    phone: "03310866442",
  });
  console.log("newly created dept: ", department);
}

main();
