const express = require("express");
const protect = require("../../middleware/auth.middleware");

const router = express.Router();

const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("./category.controller");

// Public Routes
router.get("/", getCategories);
router.get("/:id", getCategoryById);

// Protected Routes
router.post("/", protect, createCategory);
router.put("/:id", protect, updateCategory);
router.delete("/:id", protect, deleteCategory);

module.exports = router;