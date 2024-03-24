const Sequelize = require("sequelize");
require("dotenv").config();

const connection = (sequelize = new Sequelize(process.env.JAWSDB_URL));

module.exports = connection;

// process.env.DB_NAME,
// process.env.DB_USER,
// process.env.DB_PASSWORD,
// {
//   host: "localhost",
//   dialect: "mysql",
//   port: 3306,
