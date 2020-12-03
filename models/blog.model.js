const mongoose = require("mongoose");

const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    description: String
  })
);

module.exports = Blog;