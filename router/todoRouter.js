const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

router.route("/").post(todoController.createTodo);

module.exports = router;