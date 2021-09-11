const applyLeaveDb = require("../db/apply-leave");

async function main() {
  await update(1);
}

async function create() {
  const fields = {
    subject: "Sick",
    description: "Description",
    from: new Date("2021-09-11"),
    to: new Date("2021-09-15"),
    leaveCategory: 2,
    staff: 1,
  };

  const applyLeave = await applyLeaveDb.createApplyLeave({ ...fields });
  console.log("newly created applyLeave: ", applyLeave);
}

async function update(id) {
  const updatedApplyLeave = await applyLeaveDb.updateLeaveStatus(id, {
    leaveStatus: "ACCEPTED",
  });
  console.log("updated apply leave: ", updatedApplyLeave);
}

main();
