const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  connectionString:
    "postgres://todoappdatabase_user:86NegNcGMLrhyatSuN8OlnAKZ8M6fhEQ@dpg-cmbofe6d3nmc73ektfdg-a/todoappdatabase",
  ssl: true,
});

module.exports = pool;
