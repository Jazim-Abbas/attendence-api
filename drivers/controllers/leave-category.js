const _category = require("../../data-access/leave-category");

async function create(req, res) {
  const leaveCategory = await _category.createCategory(req.body);
  res.send({ leaveCategory });
}

module.exports = { create };
