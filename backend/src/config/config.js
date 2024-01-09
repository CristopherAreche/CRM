require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  host: process.env.DB_HOST || "localhost",
  db_port: process.env.DB_PORT || 5444,
  user: process.env.DB_USER || "postgres",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "mysecretpassword",
  port: process.env.PORT || 3000,
};

module.exports = { config };
