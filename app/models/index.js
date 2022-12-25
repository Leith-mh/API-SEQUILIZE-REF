const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require("./author.js")(sequelize, Sequelize);
db.books = require("./book.js")(sequelize, Sequelize);
db.tags = require("./tag.js")(sequelize, Sequelize);

db.authors.hasMany(db.books, { foreignKey: "authorId", as: "books" });
db.books.belongsTo(db.authors, {
  foreignKey: "authorId",
  as: "author",
});

db.tags.belongsToMany(db.books, {
  through: "book_tag",
  as: "books",
  foriegnKey: "tagId",
});

db.books.belongsToMany(db.tags, {
  through: "book_tag",
  as: "tags",
  foriegnKey: "bookId",
});

module.exports = db;
