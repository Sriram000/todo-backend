const models = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const genController = (type) => {
    const model = models[type];

    return {
        create: async (req, res) => {
            const result = await model.create(req.body);
            res.json(result);
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
                res.json(result);
        },
        
        edit: async (req, res) => {
            const result = await model.update(
            req.body,
            {
                where: {
                    id: {
                        [Op.eq]: req.params.id,
                    }
                }
            });
            res.json(result);
        },
    }
    
}

module.exports = genController;