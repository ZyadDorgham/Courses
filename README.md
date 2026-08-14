# 🎓 EduCourses — Course Management System

A modern and responsive **Course Management System** built with React.js.

The project provides an interactive platform for browsing courses, exploring course categories, viewing detailed course information, and analyzing course data through a dashboard.

---

## 🚀 Live Demo

🔗 **Live Website:**  
https://edu-courses-gray.vercel.app/

🔗 **GitHub Repository:**  
https://github.com/ZyadDorgham/Courses

---

## 📸 Project Overview

EduCourses is a frontend React application designed to provide a clean and user-friendly experience for discovering and exploring academic courses.

The application fetches real course data from an external API and dynamically displays the available courses, categories, course details, and dashboard statistics.

---

## ✨ Features

### 🏠 Home Page
- Modern landing page
- Responsive design
- Navigation to different sections of the application
- Clean educational platform UI

### 📚 Courses
- Fetch courses from an external API
- Display courses dynamically
- Search courses by name
- Responsive course cards
- View detailed information for each course

### 🗂️ Categories
- Display courses based on available course data
- Dynamic course listing
- Search functionality
- Course count information
- Responsive category/course layout

### 🔎 Search
Users can search through available courses by entering part of the course name.

The displayed results update dynamically based on the search query.

### 📖 Course Details
Each course has its own details page containing:

- Course name
- Course code
- Course description
- Course level
- Course units
- Course number
- Subject ID
- GPA information
- Repeatability
- Prerequisites
- Corequisites
- Antirequisites
- Additional information
- University course page
- YouTube course search

### 📊 Dashboard
The dashboard provides an overview of the available course data, including:

- Total number of courses
- Total categories
- Total units
- Course levels
- Courses grouped by level
- Course/category statistics
- Latest courses
- Quick navigation

Dashboard statistics are calculated dynamically from the API data.

### 📱 Responsive Design
The entire application is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

---

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- React Router
- React Icons
- CSS3

### API
The project uses course data from:

https://www.uofcourse.com/api/courses

### Deployment
- Vercel

### Development Tools
- Vite
- VS Code
- Git
- GitHub
- npm

---

## 🧠 React Concepts Used

This project demonstrates several important React concepts:

- Functional Components
- Props
- State Management with `useState`
- Side Effects with `useEffect`
- React Router
- Dynamic Routes
- URL Parameters with `useParams`
- Conditional Rendering
- Array Methods
- `map()`
- `filter()`
- `reduce()`
- Dynamic UI Rendering
- Reusable Components
- API Integration
- Async/Await
- Error Handling
- Loading States

---

## 🔌 API Integration

Courses are retrieved from the external API:

```text
GET https://www.uofcourse.com/api/courses
