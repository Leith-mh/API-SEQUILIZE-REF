const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
});

app.use("/book", require("./routes/book"));

app.listen(process.env.PORT || 8085, (err) =>
  err
    ? console.error("Server connection error", err)
    : console.log("Server is running")
);
