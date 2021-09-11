const staffDb = require("../db/staff");

async function main() {
  await createStaff();
}

async function createStaff() {
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

main();
