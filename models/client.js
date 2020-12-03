const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    id: Number,
    company: String,
    name: String,
    description: String,
    email: String,
    contact: Number,
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