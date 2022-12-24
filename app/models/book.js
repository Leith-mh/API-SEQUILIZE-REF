const Sequelize = require("sequelize");
const db = require("../util/db");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("books", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Book;
};
