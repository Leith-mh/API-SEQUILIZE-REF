const express = require("express");

const sequelize = require("./util/db");
const Book = require("./models/book");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
});

app.use("/books", require("./routes/book"));

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.EXTERNAL_PORT || 8085);
  } catch (error) {
    console.error(error);
  }
})();
