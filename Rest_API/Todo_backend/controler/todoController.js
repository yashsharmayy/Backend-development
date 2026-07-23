const todoItem = require("../models/todoItem");
const TodoItem = require("../models/todoItem");

exports.createTodoItem = async (req, res) => {
  try {
    console.log(req.body);

    const { task, date } = req.body;

    const todo = new TodoItem({
      task,
      date,
    });

    await todo.save();

    res.status(201).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.getTodoItem = async (req, res) => {
  try {
    const todos = await TodoItem.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.deleteTodoItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await TodoItem.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(deletedTodo);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
exports.markCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    await TodoItem.findById(id);
    TodoItem.completed = true;
    await TodoItem.save();
  } catch (err) {
    res.status(204).json({
      message: err.message,
    });
  }
};
