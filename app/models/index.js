const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Author = require("./author.js")(sequelize, Sequelize);
db.Book = require("./book.js")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db.modelName.associate) {
    db.modelName.associate(db);
  }
});

module.exports = db;
