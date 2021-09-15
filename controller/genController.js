const models = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const genController = (type) => {
    const model = models[type];

    return {
        create: async (req, res) => {
            const { text, isCompleted } = req.body;
            const result = await model.create({
                text,
                isCompleted,
            });
                res.json({
                     message: result ? "success" : "error" });
        },
        
        get: async (req, res) => {
            const result = await model.findOne(
            {
            where: {
                id: {
                    [Op.eq]: req.params.id,
                }
            }
            })
            res.json(result);
        },
        
        list: async (req, res) => {
            const todos = await model.findAll({})
            res.json(todos);
        },
        
        delete: async (req, res) => {
            const result = await model.destroy({
                    where: {
                        id: {
                            [Op.eq]: req.params.id,
                        }
                    }
                });
                res.json({
                    message: result ? "success" : "ID does not exists" });
        },
        
        edit: async (req, res) => {
            const result = await model.update({
                text: req.body.text
            },
            {
                where: {
                    id: {
                        [Op.eq]: req.params.id,
                    }
                }
            });
            res.json({
                message: result ? "Success" : "Error"
            });
        },
    }
    
}

module.exports = genController;