const yup = require("yup");

const departmentSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
});

module.exports = { departmentSchema };
