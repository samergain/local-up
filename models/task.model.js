const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
    status: String,
    created_at : { type: Date, default: Date.now }
  })
);

module.exports = Task;