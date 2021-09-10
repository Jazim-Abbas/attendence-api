const leaveCategoryDb = require("../db/leave-category");

async function main() {
  await show(1);
}

async function index() {
  const categories = await leaveCategoryDb.allLeaveCategories();
  console.log("all leave categories: ", categories);
}

async function show(id) {
  const category = await leaveCategoryDb.singleLeaveCategory(id);
  console.log("leave category: ", category);
}

async function create() {
  const category = await leaveCategoryDb.createCategory({
    name: "First Category",
  });
  console.log("leave category: ", category);
}

main();
