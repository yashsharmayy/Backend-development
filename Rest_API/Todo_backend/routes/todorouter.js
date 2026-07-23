//External Module
const express = require("express");
const todoItemRouter = express.Router();

//Local module
const todoItemController = require("../controler/todoController");

todoItemRouter.post("/", todoItemController.createTodoItem);

module.exports = todoItemRouter;
