const todo = require('../models').Todo;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.createTodo = async (req, res) => {
    const { text, isCompleted } = req.body;
    const result = await todo.create({
        text,
        isCompleted,
    });
        res.json({
             message: result ? "success" : "error" });
}

exports.allTodo = async (req, res) => {
    const todos = await todo.findAll({})
    res.json({ todos });
}

exports.deleteTodo = async (req, res, next) => {
    const result = await todo.destroy({
            where: {
                id: {
                    [Op.eq]: req.params.todo_id,
                }
            }
        });
        res.json({
            message: result ? "success" : "ID does not exists" });
}