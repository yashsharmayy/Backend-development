//External Module
const express = require("express");
const todoItemRouter = express.Router();

//Local module
const todoItemController = require("../controler/todoController");

todoItemRouter.post("/", todoItemController.createTodoItem);
todoItemRouter.get("/", todoItemController.getTodoItem);
todoItemRouter.delete("/:id", todoItemController.deleteTodoItem);
todoItemRouter.put("/:id/completed", todoItemController.markCompleted);

module.exports = todoItemRouter;
