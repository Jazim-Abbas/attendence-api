const yup = require("yup");

const createAttendence = yup.object().shape({
  staff: yup.number().required(),
  timeIn: yup.string().notRequired(),
});

module.exports = { createAttendence };
