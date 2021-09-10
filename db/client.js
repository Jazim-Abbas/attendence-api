const { Pool } = require("pg");

function init() {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345",
    port: 5432,
  });

  return {
    getClient: () => pool,
  };
}

const _init = init();
/** @type {Pool} */
const client = _init.getClient();

module.exports = client;
