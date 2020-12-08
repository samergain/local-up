const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    created_at : { type: Date, default: Date.now }
  })
);

module.exports = Ticket;