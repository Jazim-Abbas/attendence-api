const attendenceDb = require("../db/attendence");

async function main() {
  await create();
}

async function create() {
  const fields = { timeIn: "09:20", staff: 1 };
  const attendence = await attendenceDb.createAttendence({ ...fields });
  console.log("newly created attendence: ", attendence);
}

main();
