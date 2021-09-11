const staffDb = require("../db/staff");

async function main() {
  await drop(4);
}

async function create() {
  const staffFields = {
    firstName: "Hassan",
    lastName: "Saleem",
    email: "hassan@gmail.com",
    password: "password",
    gender: "MALE",
    joiningDate: new Date("2021-03-21"),
  };

  const newStaff = await staffDb.createStaff({ ...staffFields });
  console.log("newly created staff: ", newStaff);
}

async function update(id) {
  const staffFields = { address: "Lahore" };
  const updatedStaff = await staffDb.updateStaff(id, { ...staffFields });
  console.log("updated staff: ", updatedStaff);
}

async function drop(id) {
  const staffDeletedCount = await staffDb.deleteStaff(id);
  console.log("staffDeletedCount: ", staffDeletedCount);
}

main();
