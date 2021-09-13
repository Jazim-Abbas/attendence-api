const categoryModel = require("../../models/leave-category");
const categoryDb = require("../../db/leave-category");

async function createCategory(categFields) {
  const category = await categoryModel.createCategory({ ...categFields });
  const newCategory = {
    name: category.getName(),
  };

  return categoryDb.createCategory(newCategory);
}

module.exports = { createCategory };
