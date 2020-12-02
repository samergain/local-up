const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    title: String,
    description: String,
    status: String
  })
);

module.exports = Ticket;