const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require("./author.js")(sequelize, Sequelize);
db.books = require("./book.js")(sequelize, Sequelize);

db.authors.hasMany(db.books, { as: "books" });
db.books.belongsTo(db.authors, {
  foreignKey: "authorId",
  as: "author",
});

module.exports = db;
