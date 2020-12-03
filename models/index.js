const mongoose = require("mongoose");

const Client = mongoose.model(
  "Project",
  new mongoose.Schema({
    id: Int,
    company: String,
    name: String,
    description: String,
    email: String,
    contact: Int,
    assignedUsers: [{
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
module.exports = Client;