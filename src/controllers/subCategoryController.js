const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create SubCategory under a specific Category
exports.createSubCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const subCategory = new SubCategory({
      ...req.body,
      categoryId,
    });

    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all SubCategories
exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all SubCategories under a specific Category
exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await SubCategory.find({ categoryId });
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a SubCategory
exports.editSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
