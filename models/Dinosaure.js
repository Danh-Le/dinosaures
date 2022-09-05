const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize) => {
  const Dinosaure = sequelize.define("Dinosaure", {
    name: {
      type: DataTypes.STRING,
    },
    scientificName: {
      type: DataTypes.STRING,
    },
    apparitionYear: {
      type: DataTypes.INTEGER,
    },
    disparition: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
    },
  });
  return Dinosaure;
};
