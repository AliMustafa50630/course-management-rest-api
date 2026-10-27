const express = require("express");
const cors = require("cors");

// Import Routes
const authRoutes = require("./modules/auth/auth.routes");
const categoryRoutes = require("./modules/category/category.routes");
const courseRoutes = require("./modules/course/course.routes");

// Import Error Middleware
const {
  notFound,
  errorHandler
} = require("./middleware/error.middleware");

// Create Express App
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Course Management API"
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/courses", courseRoutes);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

module.exports = app;