const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create Item under a specific SubCategory
exports.createItem = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const subCategory = await SubCategory.findById(subCategoryId);
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });

    const item = new Item({
      ...req.body,
      subCategoryId,
      categoryId: subCategory.categoryId,
      totalAmount: req.body.baseAmount - req.body.discount,
    });

    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Items under a specific Category
exports.getItemsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const items = await Item.find({ categoryId });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Items under a specific SubCategory
exports.getItemsBySubCategory = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const items = await Item.find({ subCategoryId });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search Items by Name
exports.searchItems = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await Item.find({ name: new RegExp(name, 'i') });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit an Item
exports.editItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(
      id,
      { ...req.body, totalAmount: req.body.baseAmount - req.body.discount },
      { new: true }
    );

    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
