const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  user: process.env.USER ?? "postgres", 
  password: process.env.PASSWORD ?? "jugodeub4", 
  host: process.env.HOST ?? "localhost",
  port: process.env.PORT ?? 5432,
  database: process.env.DATABASE ?? "todoAppDatabase",
});

module.exports = pool;


