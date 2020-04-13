const express = require("express");
const router = express.Router();
const {
  createTodo,
  updateTodo,
  getTodoList,
  clearTodos,
  deleteTodo
} = require("../controllers/todos.controllers");

//Create todo
router.post("/api/createTodo", createTodo);
//Update todo
router.post("/api/updateTodo", updateTodo);
//Get all todos | with completed status
router.post("/api/todos", getTodoList);
//Delete todo
router.post("/api/deleteTodo", deleteTodo);
//Clear all todos | with completed status
router.post("/api/clearTodos", clearTodos);

module.exports = router;
