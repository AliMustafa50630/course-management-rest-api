# 🎓 Course Management REST API

A RESTful Course Management API developed using **Node.js, Express.js, and MongoDB**, following a **Modular MVC Architecture**.

This project provides secure user authentication and complete CRUD operations for managing courses and categories.

## 🚀 Features

- User Registration and Login
- JWT-Based Authentication
- Password Hashing using bcryptjs
- Category CRUD Operations
- Course CRUD Operations
- MongoDB Database Integration
- Modular MVC Architecture
- Input Validation
- Error Handling (400, 401, 404, 500)
- Protected API Routes
- RESTful API Design

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Authentication**
- JSON Web Token (JWT)
- bcryptjs

**Other Tools**
- Postman
- Git & GitHub
- VS Code
- dotenv
- CORS

## 📁 Project Structure

```text
course_management_api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.model.js
│   │   │   ├── auth.controller.js
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── category/
│   │   │   ├── category.model.js
│   │   │   ├── category.controller.js
│   │   │   └── category.routes.js
│   │   │
│   │   └── course/
│   │       ├── course.model.js
│   │       ├── course.controller.js
│   │       └── course.routes.js
│   │
│   └── app.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AliMustafa50630/course-management-rest-api.git
```

### 2. Navigate to Project Directory

```bash
cd course-management-rest-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/course_management
JWT_SECRET=your_secure_random_secret
```

Replace `your_secure_random_secret` with a strong random secret.

Make sure MongoDB Community Server is installed and running.

### 5. Start the Server

```bash
npm start
```

For development:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:5000
```

## 🔗 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### 📂 Category Management

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/categories` | Create category | Protected |
| GET | `/api/categories` | Get all categories | Public |
| GET | `/api/categories/:id` | Get category by ID | Public |
| PUT | `/api/categories/:id` | Update category | Protected |
| DELETE | `/api/categories/:id` | Delete category | Protected |

### 📚 Course Management

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/courses` | Create course | Protected |
| GET | `/api/courses` | Get all courses | Public |
| GET | `/api/courses/:id` | Get course by ID | Public |
| PUT | `/api/courses/:id` | Update course | Protected |
| DELETE | `/api/courses/:id` | Delete course | Protected |

## 🔑 Authentication

Protected routes require a valid JWT token.

Include the token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Tokens are generated after successful login.

## 📝 Example API Requests

### Register User

**POST** `/api/auth/register`

```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "password": "Ali@12345"
}
```

### Login User

**POST** `/api/auth/login`

```json
{
  "email": "ali@example.com",
  "password": "Ali@12345"
}
```

### Create Category

**POST** `/api/categories`

```json
{
  "name": "Programming",
  "description": "Programming related courses"
}
```

### Create Course

**POST** `/api/courses`

```json
{
  "title": "JavaScript Basics",
  "description": "Learn JavaScript from scratch",
  "price": 2500,
  "category": "YOUR_CATEGORY_ID"
}
```

Replace `YOUR_CATEGORY_ID` with an existing MongoDB category ID.

## 📊 HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Successful Request |
| 201 | Created - Resource Created |
| 400 | Bad Request - Validation Error |
| 401 | Unauthorized - Authentication Required |
| 404 | Not Found - Resource or Route Not Found |
| 500 | Internal Server Error |

## 🏗️ Architecture

This project follows a Modular MVC Architecture.

**Model:** Defines MongoDB schemas and database structure.

**Controller:** Handles application logic and database operations.

**Routes:** Defines API endpoints and connects requests with controllers.

**Middleware:** Handles authentication and errors.

### Request Flow

```text
Client (Postman)
       |
       v
Express.js Routes
       |
       v
Authentication Middleware
       |
       v
Controller
       |
       v
Mongoose Model
       |
       v
MongoDB Database
```

Authentication middleware applies to protected routes.

## 🧪 API Testing

The API has been tested locally using PowerShell HTTP requests.

Postman can also be used to test endpoints and inspect HTTP responses.

## 🔮 Future Improvements

- React.js Frontend
- Student Dashboard
- Admin Dashboard
- Role-Based Authorization
- Course Enrollment System
- Search and Filtering
- Pagination
- API Documentation
- Cloud Deployment

## 👨‍💻 Author

**Ali Mustafa**

GitHub: https://github.com/AliMustafa50630

## 📌 Project Status

Backend REST API implemented and tested locally.

Future goal: Expand the project into a complete Full Stack Learning Management System (EduTrack).

---

⭐ If you find this project useful, consider giving the repository a star!