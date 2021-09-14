const bcrypt = require("bcryptjs");

async function compareHash({ hash, value }) {
  try {
    const isValid = await bcrypt.compare(value, hash);

    if (!isValid) {
      throw new Error("Password is invalid");
    }
  } catch (_) {
    throw new Error("Password is invalid");
  }
}

module.exports = compareHash;
