// routes/posts.js
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// Create a new blog post
router.post("/", postsController.createPost);

// Get all blog posts
router.get("/", postsController.getAllPosts);

// Get a blog post by ID
router.get("/:id", postsController.getPostById);

// Handle unsupported methods (PUT, PATCH, DELETE)
router.put("/:id", postsController.handleUnsupportedMethods);
router.patch("/:id", postsController.handleUnsupportedMethods);
router.delete("/:id", postsController.handleUnsupportedMethods);

module.exports = router;
