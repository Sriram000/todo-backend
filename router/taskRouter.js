const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.route("/")
    .post(taskController.create)
    .get(taskController.list);
router.route("/:id")
    .delete(taskController.delete)
    .put(taskController.edit)
    .get(taskController.get);

module.exports = router;