const todoItem = require("../models/todoItem");

exports.createTodoItem = async (req, res, next) => {
  console.log(req.body);

  const { title, date } = req.body;
  const todoItem = new todoItem({ title, date });
  await todoItem.save();
  res.status(201).json(todoItem);
};
