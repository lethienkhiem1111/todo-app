const db = require("../models/index");
const Todo = db.todo;

/** 
 * Insert todo to database
 * @todo {id, task, completed}
*/
exports.createTodo = (req, res) => {
  if (!req.body.task) {
    res.status(400).send({
      message: "Task is not empty"
    });
    return;
  }
  const todo = {
    task: req.body.task,
    completed: false
  };

  Todo.create(todo)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured !"
      });
    });
};

/**
 * update todo by Id
 * @param { todo: Todo }
 * @return { message }
 */
exports.updateTodo = (req, res) => {
  const { id } = req.body;
  Todo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Todo was updated successfully."
        });
      } else {
        res.status(400).json({
          message: `Cannot update todo with id=${id}. Maybe todo was not found or task is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error updating todo with id=" + id
      });
    });
};

/**
 * find all todos
 * @params {completed = boolean | undefined}
 * @return { list | {message: error} }
 */
exports.getTodoList = (req, res) => {
  const { completed } = req.body;
  if (completed === undefined) {
    Todo.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        res.status(500).json({
          message: error
        });
      });
    return;
  }
  const isComplete = completed === "true";
  Todo.findAll({ where: { completed: isComplete } })
    .then(data => {
      res.status(200).json({ data: data });
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });
};

/**
 * clear todos
 * @params {completed = boolean | undefined}
 * @return { message }
 */
exports.clearTodos = (req, res) => {
  const { completed } = req.body;
  if (completed === undefined) {
    Todo.destroy({ where: {} })
      .then(nums => {
        res.send({ message: `${nums} Todos were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all todos."
        });
      });
    return;
  }
  const isComplete = completed === "true";
  Todo.destroy({ where: { completed: isComplete } })
    .then(nums => {
      res.send({
        message: `${nums} todos was deleted successfully depend on completed value!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Todos with completed=" + completed
      });
    });
};

/**
 * Delete todo by Id
 * @param { id: number }
 * @return { message }
 */
exports.deleteTodo = (req, res) => {
  const { id } = req.body;
  Todo.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Todo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Todo with id=" + id
      });
    });
};
