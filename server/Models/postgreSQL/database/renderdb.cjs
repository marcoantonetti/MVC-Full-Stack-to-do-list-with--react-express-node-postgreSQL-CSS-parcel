// const Pool = require("pg").Pool;
// require("dotenv").config();

// // Postgres database communication
// const pool = new Pool({
//   connectionString:
//     "postgres://todoappdatabase_user:86NegNcGMLrhyatSuN8OlnAKZ8M6fhEQ@dpg-cmbofe6d3nmc73ektfdg-a.oregon-postgres.render.com/todoappdatabase",
//   ssl: true,
//   ssl: { rejectUnauthorized: false }
// });

// module.exports = pool;

const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  user: process.env.USER ?? "todoappdatabase_user", 
  password: process.env.PASSWORD ?? "86NegNcGMLrhyatSuN8OlnAKZ8M6fhEQ", 
  host: process.env.HOST ?? "dpg-cmbofe6d3nmc73ektfdg-a",
  port: process.env.PORT ?? 5432,
  database: process.env.DATABASE ?? "todoAppDatabase",
});

module.exports = pool;