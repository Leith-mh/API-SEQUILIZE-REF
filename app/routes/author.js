const controller = require("../controllers/author");

const express = require("express");
const router = express.Router();

// CRUD
router
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
