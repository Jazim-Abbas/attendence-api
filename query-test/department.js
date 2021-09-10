const departmentDb = require("../db/department");

async function main() {
  await index();
}

async function index() {
  const listDepts = await departmentDb.allDepartments();
  console.log("list all depts: ", listDepts);
}

async function create() {
  const department = await departmentDb.createDepartment({
    name: "Software Department",
    phone: "03310866442",
  });
  console.log("newly created dept: ", department);
}

main();
