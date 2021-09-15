const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

router.route("/")
    .get(todoController.list)
    .post(todoController.create);
router.route("/:id")
    .put(todoController.edit)
    .delete(todoController.delete)
    .get(todoController.get);

module.exports = router;