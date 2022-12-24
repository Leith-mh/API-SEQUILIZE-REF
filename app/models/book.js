const sequelize = require("sequelize");

const db = require("../utils/db");

const User = db.define("books", {
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

  author: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },

  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
