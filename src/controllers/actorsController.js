const db = require('../database/models');
const sequelize = db.sequelize;

const actorsController = {
    list: function (req, res) {
        db.Actor.findAll()
            .then(actors => {
                res.render("actorsList", {actors: actors})
            })
    },

    detail: function (req, res) {
        db.Actor.findByPk(req.params.id)
        .then(actor => {
            res.render('actorsDetail', {actor});
        });
    }
}

module.exports = actorsController;