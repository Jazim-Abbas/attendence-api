function isValidHashedPassword(checkHash) {
  return async ({ plainPassword, hash }) => {
    await checkHash({ hash, value: plainPassword });
  };
}

module.exports = isValidHashedPassword;
