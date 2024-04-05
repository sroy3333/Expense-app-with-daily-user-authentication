const Sequelize = require('sequelize');

const sequelize = new Sequelize ('expenses', 'root', 'Pgoen201gssbr$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
