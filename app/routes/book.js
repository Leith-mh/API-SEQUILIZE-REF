const controller = require("../controllers/book.js");

const express = require("express");
const router = express.Router();

router.get("/health", controller.health);
module.exports = router;
