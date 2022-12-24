const express = require("express");

const sequelize = require("./util/db");
const Book = require("./models/book");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
  next();
});

app.use("/books", require("./routes/book"));
app.use("/authors", require("./routes/author"));

sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
