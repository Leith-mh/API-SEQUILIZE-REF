const Sequelize = require("sequelize");
const db = require("../util/db");

module.exports = (sequelize, DataTypes) => {
  const Book = db.define("books", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    isbn: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Book;
};
