const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "productDb",
  password: "Pass@123",
  port: 5432,
});

module.exports = pool;