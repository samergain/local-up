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
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
  })
);

module.exports = User;