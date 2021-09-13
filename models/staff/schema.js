const yup = require("yup");
const { GENDER } = require("./contants");

const staffSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  gender: yup.string().oneOf(Object.values(GENDER)).required(),
  joiningDate: yup.date().required(),
  dob: yup.date().notRequired(),
  phone: yup.number().notRequired(),
  address: yup.string().notRequired(),
  department: yup.number().notRequired(),
  jobTitle: yup.number().notRequired(),
});

const updateStaffSchema = yup.object().shape({
  firstName: yup.string().notRequired(),
  lastName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  gender: yup.string().oneOf(Object.values(GENDER)).notRequired(),
  joiningDate: yup.date().notRequired(),
  dob: yup.date().notRequired(),
  phone: yup.number().notRequired(),
  address: yup.string().notRequired(),
  department: yup.number().notRequired(),
  jobTitle: yup.number().notRequired(),
});

module.exports = { staffSchema, updateStaffSchema };
