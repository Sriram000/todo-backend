const task = require("../models").Task;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.createTask = async (req, res) => {
    const { text, dueOn } = req.body;
    const result = await task.create({
        text,
        dueOn,
    });
    res.json({
        message: result ? 'Success' : 'Error'
    });
}

exports.getTask = async (req, res) => {
    const result = await task.findOne(
    {
    where: {
        id: {
            [Op.eq]: req.params.id,
        }
    }
    })
    res.json(result);
}

exports.listTasks = async (req, res) => {
    const tasks = await task.findAll({});
    res.json(tasks);
}

exports.deleteTask = async (req, res) => {
    const result = await task.destroy({
        where: {
            id: {
                [Op.eq]: req.params.id,
            }
        }
    });
    res.json({
        message: result ? 'Success' : 'Failure'
    });
}

exports.editTask = async (req, res) => {
    const result = await task.update({
        text: req.body.text,
    },
    {
        where: {
            id: {
                [Op.eq]: req.params.id,
            }
        }
    });
    res.json({
        message: result ? 'Success' : 'Error'
    });
};