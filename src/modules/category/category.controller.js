const Category = require("./category.model");
const mongoose = require("mongoose");

// CREATE CATEGORY
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name?.trim() || !description?.trim()) {
      return res.status(400).json({
        message: "Name and description are required"
      });
    }

    const category = await Category.create({
      name,
      description
    });

    res.status(201).json({
      message: "Category created successfully",
      category
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// GET ALL CATEGORIES
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      message: "Categories fetched successfully",
      categories
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// GET SINGLE CATEGORY
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    res.status(200).json(category);

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// UPDATE CATEGORY
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    if (
      (name !== undefined && (typeof name !== "string" || !name.trim())) ||
      (description !== undefined &&
        (typeof description !== "string" || !description.trim()))
    ) {
      return res.status(400).json({
        message: "Invalid category data"
      });
    }

    const category = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    res.status(200).json({
      message: "Category updated successfully",
      category
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// DELETE CATEGORY
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    res.status(200).json({
      message: "Category deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};