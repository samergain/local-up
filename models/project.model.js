const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    title: String,
    description: String,
    githubRepo: String,
    createdBy: String,
    status: String,
    created_at : { type: Date, default: Date.now },
    assignedDevs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    ticket: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket"
  }]
  })
);

module.exports = Project;