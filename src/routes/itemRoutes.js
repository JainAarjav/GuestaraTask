const express = require('express');
const {
  createItem,
  getItems,
  getItemsByCategory,
  getItemsBySubCategory,
  searchItems,
  editItem,
} = require('../controllers/itemController');

const router = express.Router();

// Create Item under a specific SubCategory
router.post('/subcategory/:subCategoryId', createItem);

// Get all Items
router.get('/', getItems);

// Get all Items under a specific Category
router.get('/category/:categoryId', getItemsByCategory);

// Get all Items under a specific SubCategory
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);

// Search Items by name
router.get('/search', searchItems);

// Edit an Item
router.put('/:id', editItem);

module.exports = router;
