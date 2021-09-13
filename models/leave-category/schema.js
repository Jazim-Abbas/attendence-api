const yup = require("yup");

const createCategory = yup.object().shape({
  name: yup.string().required(),
});

module.exports = { createCategory };
