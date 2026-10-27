// Handle Unknown Routes
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.originalUrl
  });
};

// Handle Server Errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

module.exports = {
  notFound,
  errorHandler
};