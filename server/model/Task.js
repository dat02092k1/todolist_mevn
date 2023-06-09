const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('completed', 'not completed'),
        defaultValue: 'not completed',
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },    
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'medium',
    }
});

sequelize.sync().then(() => {
    console.log('Task table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = Task;