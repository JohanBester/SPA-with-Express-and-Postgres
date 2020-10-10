const { Pool } = require('pg');

console.log(process.env.DATABASE_URL)

const connectionString =
  process.env.DATABASE_URL || 'postgres://postgres@localhost:5432';
const pool = new Pool({ connectionString });

module.exports = pool;
