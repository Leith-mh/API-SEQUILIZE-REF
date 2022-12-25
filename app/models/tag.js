const Sequelize = require("sequelize");
const db = require("../util/db");
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Tag;
};
