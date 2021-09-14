const config = require("config");
const jwt = require("jsonwebtoken");
const Exceptions = require("../../utils/custom-exceptions");

module.exports = async function (req, _, next) {
  const token = req.headers["x-auth-token"] || req.headers["authorization"];
  if (!token)
    throw new Exceptions.AccessDenies({
      message: "Access denied. No token provided",
    });

  try {
    const decoded = jwt.verify(token, config.get("jwt"));
    req.user = decoded;
    next();
  } catch (err) {
    throw new Exceptions.AccessDenies({ message: "Invalid token" });
  }
};
