const express = require('express');
const {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategory,
  editSubCategory,
} = require('../controllers/subCategoryController');

const router = express.Router();

// Create SubCategory under a specific Category
router.post('/:categoryId', createSubCategory);

// Get all SubCategories
router.get('/', getSubCategories);

// Get all SubCategories under a specific Category
router.get('/category/:categoryId', getSubCategoriesByCategory);

// Edit a SubCategory
router.put('/:id', editSubCategory);

module.exports = router;
