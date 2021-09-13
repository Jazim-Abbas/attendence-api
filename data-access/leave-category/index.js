const categoryModel = require("../../models/leave-category");
const categoryDb = require("../../db/leave-category");
const Exceptions = require("../../utils/custom-exceptions");

async function listAllCategories() {
  return categoryDb.allCategories();
}

async function singleLeaveCategory(id) {
  return categoryDb.singleCategory(id);
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

async function deleteCategory(id) {
  const deleteCount = await categoryDb.deleteCategory(id);
  if (deleteCount === 0) {
    throw new Exceptions.NotFound({ message: "Leave category is not found" });
  }
}

module.exports = {
  createCategory,
  listAllCategories,
  updateCategory,
  deleteCategory,
  singleLeaveCategory,
};
