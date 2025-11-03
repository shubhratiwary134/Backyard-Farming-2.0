# Backyard Farming 2.0 – An AI-Powered Farming Assistant

A comprehensive AI-powered platform designed to support modern backyard farmers with intelligent guidance, automated management, and immersive visualization.

[ Watch Demo Video for Landing Page](https://drive.google.com/file/d/1ohhMY5R1z1ty1VJNi8aT9ubhtK2hc3aq/view?usp=sharing)
---

##  Overview

**Backyard Farming 2.0** is a cutting-edge farming assistant tailored for small-scale farmers. It blends artificial intelligence with automation and 3D visualization to deliver:

- Personalized farming recommendations  
- Intelligent task scheduling  
- Real-time farm analysis  
- 3D interactive visualizations  

The goal is to make farming smart, structured, and accessible to the new generation of farmers.

---

##  Key Features

### 1. AI-Powered Farming Assistance
- Context-aware chatbot provides intelligent, personalized support.
- Remembers previous conversations for continuity.

### 2. Automated Farm Analysis & Reporting
- Generates a detailed static report based on user input.
- Includes insights on soil health, water availability, and crop suitability.
- Exportable as a PDF using `jsPDF`.

### 3. Intelligent Task Management
- Automatically creates and organizes tasks into:  
  - Upcoming  
  - Pending  
  - In Progress  
  - Completed
- AI follows up weekly, adjusting tasks based on user feedback.

### 4. Interactive 3D Farm Visualization
- Uses **Spline** to render a real-time, interactive farm environment.
- Displays dynamic elements like soil, weather, and farming preferences from the MongoDB database.

### 5. File & Image Uploads
- Supports image uploads (e.g., soil pictures) via **Multer**.
- Stores and serves files through **Cloudinary**.

---

##  Tech Stack

### Frontend
- React  
- Redux & Redux-Persist  
- Formik & Yup  
- Spline (for 3D visualization)

### Backend
- Express.js  
- MongoDB  
- Multer + Cloudinary

---

##  My Contributions

- Full-stack development (frontend and backend)
- Designed efficient MongoDB database schema
- Built a scalable REST API with Express.js
- Integrated AI assistant and dynamic task manager
- Created a real-time 3D farm model using Spline
