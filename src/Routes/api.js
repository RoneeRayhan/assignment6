const express = require('express');
const router = express.Router();
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// Create Blog API
router.get('/blog/create', createBlog);

// Read Blog API
router.get('/blog/read', readBlog);

// Delete Blog API
router.get('/blog/delete', deleteBlog);

// Update Blog API
router.get('/blog/update', updateBlog);

// Repeat the above pattern for all 10 controllers and their respective functions

module.exports = router;
