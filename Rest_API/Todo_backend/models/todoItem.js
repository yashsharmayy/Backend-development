const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const todoItemSchema = mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    data: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true },
);
module.exports = mongoose.model("TodoItem", todoItemSchema);
