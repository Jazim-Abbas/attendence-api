const categoryModel = require("../../models/leave-category");
const categoryDb = require("../../db/leave-category");

async function listAllCategories() {
  return categoryDb.allCategories();
}

async function createCategory(categFields) {
  const category = await categoryModel.createCategory({ ...categFields });
  const newCategory = {
    name: category.getName(),
  };

  return categoryDb.createCategory(newCategory);
}

async function updateCategory(id, categFields) {
  const category = await categoryModel.updateCategory({ ...categFields });
  const updatedCateg = {
    name: category.getName(),
  };

  return categoryDb.updateCategory(id, updatedCateg);
}

module.exports = { createCategory, listAllCategories, updateCategory };
