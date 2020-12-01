const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    title: String,
    description: String
  })
);

module.exports = Ticket;