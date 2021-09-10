const leaveCategoryDb = require("../db/leave-category");

async function main() {
  await drop(1);
}

async function index() {
  const categories = await leaveCategoryDb.allCategories();
  console.log("all leave categories: ", categories);
}

async function show(id) {
  const category = await leaveCategoryDb.singleCategory(id);
  console.log("leave category: ", category);
}

async function create() {
  const category = await leaveCategoryDb.createCategory({
    name: "First Category",
  });
  console.log("leave category: ", category);
}

async function update(id) {
  const updatedCategory = await leaveCategoryDb.updateCategory(id, {
    name: "First Category ..",
  });
  console.log("updatedCategory", updatedCategory);
}

async function drop(id) {
  const categoryCount = await leaveCategoryDb.deleteCategory(id);
  console.log("delete category count: ", categoryCount);
}

main();
