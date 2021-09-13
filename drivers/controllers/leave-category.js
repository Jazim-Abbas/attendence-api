const _category = require("../../data-access/leave-category");

async function index(_, res) {
  const leaveCategories = await _category.listAllCategories();
  res.send({ leaveCategories });
}

async function create(req, res) {
  const leaveCategory = await _category.createCategory(req.body);
  res.send({ leaveCategory });
}

async function update(req, res) {
  const leaveCategory = await _category.updateCategory(
    +req.params.id,
    req.body
  );
  res.send({ leaveCategory });
}

module.exports = { create, index, update };
