const express = require("express");
const protect = require("../../middleware/auth.middleware");

const router = express.Router();

const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require("./course.controller");

// Public Routes
router.get("/", getCourses);
router.get("/:id", getCourseById);

// Protected Routes
router.post("/", protect, createCourse);
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCourse);

module.exports = router;