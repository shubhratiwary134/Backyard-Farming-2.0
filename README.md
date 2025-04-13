Backyard Farming 2.0 – An AI-Powered Farming Assistant

A comprehensive AI-powered platform designed to support modern backyard farmers with intelligent guidance, automated management, and immersive visualization.

Overview:

Backyard Farming 2.0 is a cutting-edge farming assistant tailored for small-scale farmers. It blends artificial intelligence with automation and 3D visualization to deliver:

 Personalized farming recommendations

 Intelligent task scheduling

 Real-time farm analysis

 3D interactive visualizations
 
The goal is to make farming smart, structured, and accessible to the new generation of farmers.

Key Features:
 AI-Powered Farming Assistance
    Users can interact with an AI chatbot that retains context from previous messages, providing intelligent and personalized support tailored to the user's unique farm setup.

 Automated Farm Analysis & Reporting
    After users submit their farm data, the system generates a detailed, static report containing insights into soil health, water availability, and suitable crops.
    Reports can be exported as PDFs using jsPDF.

 Intelligent Task Management
    The platform creates a dynamic task list categorized into: Upcoming, Pending, In Progress, and Completed.
    AI follows up with the user weekly, adapting tasks based on user progress.

 Interactive 3D Farm Visualization
    The 'MyFarm' section features a real-time, interactive 3D farm rendered using Spline.
    It visualizes data from MongoDB like soil type, weather, and user preferences, making the farm experience more immersive.

 File and Image Handling
    Users can upload soil images using Multer. These images are stored in Cloudinary for easy access and further processing.

Tech Stack:

Frontend:

React with Redux for state management

Redux-Persist to reduce redundant API calls

Formik and Yup for form handling and validation

Spline for 3D farm rendering

Backend:

Express.js for RESTful API development

MongoDB to store user profiles, farm details, and task lists

Multer and Cloudinary for file uploads

Docker for containerization 

AWS for hosting 

Optimizations & Challenges Solved:

Used Redux-Persist for efficient state and session management

Implemented an AI chatbot that retains context across messages

Developed dynamic task generation with real-time updates

Created a real-time 3D farm model using Spline
