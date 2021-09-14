const _attendence = require("../../data-access/attendence");

async function create(req, res) {
  const attendence = await _attendence.createAttendence(req.body);
  res.send({ attendence });
}

async function markedAbsent(req, res) {
  const attendence = await _attendence.markedAbsent(req.user.id);
  res.send({ attendence });
}

async function markedLeave(req, res) {
  const attendence = await _attendence.markedAbsent(req.user.id);
  res.send({ attendence });
}

async function update(req, res) {
  const attendence = await _attendence.updateAttendence(req.body);
  res.send({ attendence });
}

module.exports = { create, update, markedAbsent, markedLeave };
