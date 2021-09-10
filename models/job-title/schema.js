const yup = require("yup");

const jobTitleSchema = yup.object().shape({
  jobTitle: yup.string().required(),
  allowedLeaves: yup.number().min(1).required().label("allowedLeaves"),
});

module.exports = { jobTitleSchema };
