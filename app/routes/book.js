const controller = require("../controllers/book");

const express = require("express");
const router = express.Router();
console.log(controller);
// Health Check
router.get("/health", controller.health);

// CRUD
router
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne)
  .get("/author/:id", controller.getOneByAuthor);

module.exports = router;
