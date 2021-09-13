const yup = require("yup");

const createAttendence = yup.object().shape({
  staff: yup.number().required(),
  timeIn: yup.string().notRequired(),
});

const updateAttendence = yup.object().shape({
  staff: yup.number().required(),
  timeOut: yup.string().notRequired(),
});

module.exports = { createAttendence, updateAttendence };
