const Exceptions = require("../../utils/custom-exceptions");

module.exports = async function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let errors = [];

  console.log("error: ", err);

  if (err instanceof Exceptions.HttpError) {
    if (err instanceof Exceptions.ValidationError) {
      errors = err.errors;
    }
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).send({ message, errors });
};
