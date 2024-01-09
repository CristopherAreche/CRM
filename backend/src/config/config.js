require("dotenv").config();

const config = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  port: process.env.PORT,
};

module.exports = { config };
