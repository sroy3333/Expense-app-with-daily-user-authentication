const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = require('./users');

const Expense = sequelize.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expenseamount: Sequelize.INTEGER,
    category: Sequelize.STRING,
    description: Sequelize.STRING,
    
});

Expense.belongsTo(User);
User.hasMany(Expense);

module.exports = Expense;