const _applyLeave = require("../../data-access/apply-leave");

async function index(_, res) {
  const applyLeaves = await _applyLeave.listAllApplyLeaves();
  res.send({ applyLeaves });
}

async function allForStaff(req, res) {
  const applyLeaves = await _applyLeave.listAllApplyLeavesForStaff(
    +req.params.staffId
  );
  res.send({ applyLeaves });
}

async function create(req, res) {
  const applyLeave = await _applyLeave.createApplyLeave(req.user, req.body);
  res.send({ applyLeave });
}

async function updateLeaveStatus(req, res) {
  const applyLeave = await _applyLeave.updateLeaveStatus(
    +req.params.id,
    req.body
  );
  res.send({ applyLeave });
}

module.exports = { create, updateLeaveStatus, index, allForStaff };
