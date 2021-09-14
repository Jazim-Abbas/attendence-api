const authModel = require("../../models/auth");
const authDb = require("../../db/auth");
const isValidHashedPassword = require("./compare-hash.util");
const Exceptions = require("../../utils/custom-exceptions");

async function authLogin(loginFields) {
  const login = await authModel.makeLogin({ ...loginFields });

  const staffInDb = await authDb.findByEmail({ email: login.getEmail() });
  if (!staffInDb) {
    throw new Exceptions.BadRequest({ message: "Credentials not matched" });
  }

  try {
    await isValidHashedPassword({
      hash: staffInDb.password,
      value: login.getPassword(),
    });
  } catch (_) {
    throw new Exceptions.BadRequest({ message: "Credentials not matched" });
  }

  return staffInDb;
}

module.exports = { authLogin };
