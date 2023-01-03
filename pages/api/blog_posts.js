//const fs = require("fs");
import fs from "fs";
//const path = require("path");
import path from "path";
// const matter = require("gray-matter");
// const remark = require("remark");
// const html = require("remark-html");
// Ther reference is the docker home /app/portfolio
const postsDirectory = path.join(process.cwd(), "blog_posts");

export default function handler(req, res) {
  const blogPosts = [{ id: 1, title: "First blog post", pwd: postsDirectory }];
  res.status(200).json(blogPosts);
}
