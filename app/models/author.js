const Sequelize = require("sequelize");
const db = require("../util/db");
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    origins: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  });
  return Author;
};
