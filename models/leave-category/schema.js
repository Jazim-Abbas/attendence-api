const yup = require("yup");

const createCategory = yup.object().shape({
  name: yup.string().required(),
});

const updateCategory = yup.object().shape({
  name: yup.string().notRequired(),
});

module.exports = { createCategory,updateCategory };
