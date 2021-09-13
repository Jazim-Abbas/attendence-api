const yup = require("yup");

const departmentSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().email().notRequired(),
  address: yup.string().notRequired(),
});

module.exports = { departmentSchema };
