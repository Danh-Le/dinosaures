require("dotenv").config();
const { Sequelize } = require("sequelize");
const databaseName = process.env.DATABASE_NAME;
const user = process.env.user;
const password = process.env.PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize(databaseName, user, password, {
  host,
  dialect: "mysql",
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
};

connectDb();

const Dinosaure = require("../models/Dinosaure")(sequelize);
sequelize.sync = { alter: true };

const db = {
  sequelize: sequelize,
};

module.exports = db;
