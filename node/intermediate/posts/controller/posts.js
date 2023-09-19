// controllers/posts.js
const Post = require("../models/posts");

// Create a new blog post
exports.createPost = async (req, res) => {
  try {
    const { title, author, isPublished, timestamp } = req.body;
    const post = await Post.create({ title, author, isPublished, timestamp });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all blog posts
exports.getAllPosts = async (req, res) => {
  try {
    const { author, isPublished } = req.query;
    const whereClause = {};
    if (author) {
      whereClause.author = author;
    }
    if (isPublished === "true" || isPublished === "false") {
      whereClause.isPublished = isPublished === "true";
    }
    const posts = await Post.findAll({ where: whereClause });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a blog post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({ where: { id } });
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "ID not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Handle unsupported methods (PUT, PATCH, DELETE)
exports.handleUnsupportedMethods = (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
};
