const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require("./author.js")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db.modelName.associate) {
    db.modelName.associate(db);
  }
});

module.exports = db;
