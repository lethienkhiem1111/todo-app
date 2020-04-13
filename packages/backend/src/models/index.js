const dbConfig = require("../config/db.config");
const Todo = require("../models/todo.model");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('todos', 'root', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = Todo(sequelize, Sequelize);

module.exports = db;
