require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432, // Default PostgreSQL port
});

pool.connect()
  .then(() => console.log("✅ PostgreSQL Connected Successfully!"))
  .catch(err => console.error("❌ Database Connection Error:", err));

module.exports = pool;
