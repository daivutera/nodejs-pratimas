require('dotenv').config();

const dbConfig = {
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
};

module.exports = dbConfig;
