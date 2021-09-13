const _applyLeave = require("../../data-access/apply-leave");

async function create(req, res) {
  const applyLeave = await _applyLeave.createApplyLeave(req.body);
  res.send({ applyLeave });
}

module.exports = { create };
