const leaveCategoryDb = require("../db/leave-category");

async function main() {
  await create();
}

async function create() {
  const category = await leaveCategoryDb.createCategory({
    name: "First Category",
  });
  console.log("leave category: ", category);
}

main();
