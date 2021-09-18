const _attendence = require("../../data-access/attendence");

async function dailyAttendenceStatsForStaff(req, res) {
  const stats = await _attendence.dailyAttendenceStatsForStaff(
    +req.params.staffId
  );
  res.send({ stats });
}

async function create(req, res) {
  const attendence = await _attendence.createAttendence(req.body);
  res.send({ attendence });
}

async function markedAbsent(req, res) {
  const attendence = await _attendence.markedAbsent(req.body.staffId);
  res.send({ attendence });
}

async function markedLeave(req, res) {
  const attendence = await _attendence.markedAbsent(req.body.staffId);
  res.send({ attendence });
}

async function update(req, res) {
  const attendence = await _attendence.updateAttendence(req.body);
  res.send({ attendence });
}

module.exports = {
  create,
  update,
  markedAbsent,
  markedLeave,
  dailyAttendenceStatsForStaff,
};
