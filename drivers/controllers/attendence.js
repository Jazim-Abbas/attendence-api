const _attendence = require("../../data-access/attendence");

async function create(req, res) {
  const attendence = await _attendence.createAttendence(req.body);
  res.send({ attendence });
}

module.exports = { create };
