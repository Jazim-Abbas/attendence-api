const leaveCategoryDb = require("../db/leave-category");

async function main() {
  await index();
}

async function index() {
  const categories = await leaveCategoryDb.allLeaveCategories();
  console.log("all leave categories: ", categories);
}

async function create() {
  const category = await leaveCategoryDb.createCategory({
    name: "First Category",
  });
  console.log("leave category: ", category);
}

main();
