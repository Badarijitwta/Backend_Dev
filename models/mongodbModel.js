const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: [String],
  body: String,
});

const blog = mongoose.Model("blog", blogSchema);
