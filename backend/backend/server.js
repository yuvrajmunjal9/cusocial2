require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the CU Socials Backend!');
});

// Test Route to Check DB Connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW();');
    res.json({ message: '✅ Database Connected!', time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: '❌ Database Connection Failed', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CU Socials Backend is Running on http://localhost:${PORT}`);
});
