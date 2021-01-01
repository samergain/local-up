const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    company: String,
    contact: String,
    github: String,
    skills: [String],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    devProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }],
    clientTickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    }],
    created_at : { type: Date, default: Date.now }
  })
);


module.exports = User;