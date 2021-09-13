const todo = require('../models').Todo;

exports.createTodo = async (req, res) => {
    const { text, isCompleted } = req.body;
    const result = await todo.create({
        text,
        isCompleted,
    });
        res.json({
             message: result ? "success" : "error" });
}