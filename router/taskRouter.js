const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.route("/").post(taskController.createTask).get(taskController.listTasks);
router.route("/:id")
    .delete(taskController.deleteTask)
    .put(taskController.editTask)
    .get(taskController.getTask);

module.exports = router;