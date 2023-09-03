const express = require('express');
const router = express.Router();

// Blog routes
const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// Create Blog API
router.post('/blog/create', createBlog);

// Read Blog API
router.get('/blog/read', readBlog);

// Delete Blog API
router.delete('/blog/delete', deleteBlog);

// Update Blog API
router.put('/blog/update', updateBlog);

// Repeat the above pattern for all 10 controllers and their respective functions


// BlogDetails routes
const {
  create: createBlogDetails,
  read: readBlogDetails,
  delete: deleteBlogDetails,
  update: updateBlogDetails,
} = require('../Controllers/blogDetailsController');

// Create BlogDetails API
router.post('/blog-details/create', createBlogDetails);

// Read BlogDetails API
router.get('/blog-details/read', readBlogDetails);

// Delete BlogDetails API
router.delete('/blog-details/delete', deleteBlogDetails);

// Update BlogDetails API
router.put('/blog-details/update', updateBlogDetails);

// Comment routes
const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require('../Controllers/commentController');

// Create Comment API
router.post('/comment/create', createComment);

// Read Comment API
router.get('/comment/read', readComment);

// Delete Comment API
router.delete('/comment/delete', deleteComment);

// Update Comment API
router.put('/comment/update', updateComment);

// Message routes
const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require('../Controllers/messageController');

// Create Message API
router.post('/message/create', createMessage);

// Read Message API
router.get('/message/read', readMessage);

// Delete Message API
router.delete('/message/delete', deleteMessage);

// Update Message API
router.put('/message/update', updateMessage);

// Portfolio routes
const {
  create: createPortfolio,
  read: readPortfolio,
  delete: deletePortfolio,
  update: updatePortfolio,
} = require('../Controllers/portfolioController');

// Create Portfolio API
router.post('/portfolio/create', createPortfolio);

// Read Portfolio API
router.get('/portfolio/read', readPortfolio);

// Delete Portfolio API
router.delete('/portfolio/delete', deletePortfolio);

// Update Portfolio API
router.put('/portfolio/update', updatePortfolio);

// Product routes
const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require('../Controllers/productController');

// Create Product API
router.post('/product/create', createProduct);

// Read Product API
router.get('/product/read', readProduct);

// Delete Product API
router.delete('/product/delete', deleteProduct);

// Update Product API
router.put('/product/update', updateProduct);

// Profit routes
const {
  create: createProfit,
  read: readProfit,
  delete: deleteProfit,
  update: updateProfit,
} = require('../Controllers/profitController');

// Create Profit API
router.post('/profit/create', createProfit);

// Read Profit API
router.get('/profit/read', readProfit);

// Delete Profit API
router.delete('/profit/delete', deleteProfit);

// Update Profit API
router.put('/profit/update', updateProfit);

// Project routes
const {
  create: createProject,
  read: readProject,
  delete: deleteProject,
  update: updateProject,
} = require('../Controllers/projectController');

// Create Project API
router.post('/project/create', createProject);

// Read Project API
router.get('/project/read', readProject);

// Delete Project API
router.delete('/project/delete', deleteProject);

// Update Project API
router.put('/project/update', updateProject);

// Service routes
const {
  create: createService,
  read: readService,
  delete: deleteService,
  update: updateService,
} = require('../Controllers/serviceController');

// Create Service API
router.post('/service/create', createService);

// Read Service API
router.get('/service/read', readService);

// Delete Service API
router.delete('/service/delete', deleteService);

// Update Service API
router.put('/service/update', updateService);

// Title routes
const {
  create: createTitle,
  read: readTitle,
  delete: deleteTitle,
  update: updateTitle,
} = require('../Controllers/titleController');

// Create Title API
router.post('/title/create', createTitle);

// Read Title API
router.get('/title/read', readTitle);

// Delete Title API
router.delete('/title/delete', deleteTitle);

// Update Title API
router.put('/title/update', updateTitle);

module.exports = router;
