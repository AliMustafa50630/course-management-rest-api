const Course = require("./course.model");
const Category = require("../category/category.model");
const mongoose = require("mongoose");

// CREATE COURSE
const createCourse = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    // Validate required fields
    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim() ||
      typeof price !== "number" ||
      !Number.isFinite(price) ||
      price < 0 ||
      !category
    ) {
      return res.status(400).json({
        message: "Valid title, description, price and category are required"
      });
    }

    // Validate category ID
    if (!mongoose.isValidObjectId(category)) {
      return res.status(400).json({
        message: "Invalid category ID"
      });
    }

    // Check category exists
    const existingCategory = await Category.findById(category);

    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    // Save course
    const course = await Course.create({
      title,
      description,
      price,
      category
    });

    res.status(201).json({
      message: "Course created successfully",
      course
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// GET ALL COURSES
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
      "category",
      "name description"
    );

    res.status(200).json({
      message: "Courses fetched successfully",
      courses
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// GET SINGLE COURSE
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    const course = await Course.findById(id).populate(
      "category",
      "name description"
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.status(200).json(course);

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// UPDATE COURSE
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, category } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    // Validate supplied fields
    if (
      (title !== undefined &&
        (typeof title !== "string" || !title.trim())) ||
      (description !== undefined &&
        (typeof description !== "string" || !description.trim())) ||
      (price !== undefined &&
        (typeof price !== "number" ||
          !Number.isFinite(price) ||
          price < 0))
    ) {
      return res.status(400).json({
        message: "Invalid course data"
      });
    }

    if (category !== undefined) {
      if (!mongoose.isValidObjectId(category)) {
        return res.status(400).json({
          message: "Invalid category ID"
        });
      }

      const existingCategory = await Category.findById(category);

      if (!existingCategory) {
        return res.status(404).json({
          message: "Category not found"
        });
      }
    }

    const course = await Course.findByIdAndUpdate(
      id,
      { title, description, price, category },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.status(200).json({
      message: "Course updated successfully",
      course
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// DELETE COURSE
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.status(200).json({
      message: "Course deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};