# Backyard Farming 2.0 – An AI-Powered Farming Assistant

---

A comprehensive AI-powered platform designed to support modern backyard farmers with intelligent guidance, automated management, and immersive visualization.

[ Watch Demo Video for Landing Page](https://drive.google.com/file/d/1ohhMY5R1z1ty1VJNi8aT9ubhtK2hc3aq/view?usp=sharing)

---

# Overview

**Backyard Farming 2.0** is a comprehensive, full-stack web application designed to empower urban and suburban gardeners. This platform, named **Plantorium**, provides users with the tools to create, manage, and optimize their personal farms. Leveraging a sophisticated microservice architecture, it combines a rich user dashboard with a powerful, AI-driven chatbot to guide users on their farming journey.

Whether you're a seasoned gardener or just starting, Plantorium helps you track your crops, manage your farm's environment, and get expert advice through an intelligent, context-aware AI assistant.

##  Core Features

  * **Secure Authentication:** User registration and login handled securely via **Auth0**, ensuring profile and farm data are protected.
  * **Multi Step Farm Creation:** An intuitive, multi step form (`FarmForm`) guides users through setting up their virtual farm, capturing details like location, soil type, and sunlight exposure.
  * **Farm Dashboard:** A central hub (`MyFarm`) where users can view and manage their registered farm, including all their crops.
  * **Crop Management:** Users can browse a database of crops and add them to their farm, tracking their progress from seed to harvest.
  * **Advanced AI Chatbot (RAG):** A dedicated chat interface (`Chat`) powered by a separate Python microservice. This service uses a **Retrieval-Augmented Generation (RAG)** model to provide highly accurate and relevant gardening advice, pulling information from a knowledge base of documents (like `corn_1.pdf`).
  * **Image Uploads:** Users can upload images of their farm and plants using **Multer** for processing and **Cloudinary** for cloud storage.
  * **Dynamic Reporting:** A feature to generate reports (`Report`) on farm status, crop health, or other user defined metrics.
  * **Responsive UI:** A modern and beautiful user interface built with **Tailwind CSS** and **Framer Motion** for smooth animations.
  * **State Management:** Centralized and predictable state management on the frontend using **Redux Toolkit**.

##  System Architecture

This project is built on a modern microservice architecture, fully containerized with Docker for scalability and ease of development.

1.  **Client (Plantorium):** A **React (Vite) + TypeScript** single-page application that serves as the user interface. It communicates with the API backend via REST.
2.  **API (Backend):** A **Node.js + Express + TypeScript** server. It handles all business logic, user authentication, and data persistence with MongoDB. It is the primary gateway for the client.
3.  **RAG (AI Service):** A **Python** microservice (likely using FastAPI or Flask) that serves the AI chatbot. The Node.js API delegates chat requests to this service, which uses a RAG pipeline (potentially with Google's Gemini) to generate intelligent responses.
4.  **Database:** A **MongoDB** database stores all user, farm, crop, and chat data.

##  Tech Stack

### Frontend

  * **Framework:** React 18
  * **Language:** TypeScript
  * **Build Tool:** Vite
  * **Styling:** Tailwind CSS
  * **State Management:** Redux Toolkit
  * **Routing:** React Router DOM
  * **Animations:** Framer Motion
  * **Authentication:** Auth0 React SDK

### Backend (API)

  * **Runtime:** Node.js
  * **Framework:** Express.js
  * **Language:** TypeScript
  * **Database:** MongoDB with Mongoose
  * **Authentication:** JWT (JSON Web Tokens)
  * **File Handling:** Multer (for uploads) & Cloudinary (for storage)

### Backend (AI Service)

  * **Language:** Python
  * **Framework:** FastAPI / Flask (inferred)
  * **AI Model:** Retrieval-Augmented Generation (RAG)
  * **PDF/Data:** `PyMuPDF` or similar for document loading

### DevOps

  * **Containerization:** Docker & Docker Compose
  * **Web Server:** Nginx (for serving the React client)

##  Getting Started

This project is designed to be run easily using Docker Compose.

### Prerequisites

  * Git
  * Node.js (for manual install)
  * Python (for manual install)
  * Docker & Docker Compose
  * A **Cloudinary** account (for image storage)
  * An **Auth0** account (for authentication)
  * A **MongoDB** Atlas URI or local MongoDB instance

### 1\. Clone the Repository

```bash
git clone https://github.com/shubhratiwary134/backyard-farming-2.0.git
cd backyard-farming-2.0
```

### 2\. Set Up Environment Variables

You will need to create `.env` files in three different locations.

**a) Backend API (`/Api/.env`)**

```dotenv
PORT=8000
MONGO_URI=your_mongodb_connection_string
AUTH0_ISSUER=your_auth0_domain_issuer
AUTH0_AUDIENCE=your_auth0_api_audience
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**b) Frontend Client (`/Client/Plantorium/.env`)**

```dotenv
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_API_URL=http://localhost:8000
```

**c) AI RAG Service (`/Rag/.env`)**

*(You may need to add this file based on `api.py`'s requirements, which typically needs an API key for its language model.)*

```dotenv
GEMINI_API_KEY=your_google_gemini_api_key
# or other LLM provider key
```

### 3\. Build and Run with Docker Compose

This is the simplest way to run the entire application stack.

```bash
docker compose up --build
```

Your services will be available at:

  * **Frontend (Plantorium):** `http://localhost:5173`
  * **Backend (API):** `http://localhost:8000`
  * **AI (RAG):** `http://localhost:8080` (or as defined in `docker-compose.yml`)

### 4\. Manual Installation (Alternative)

If you prefer not to use Docker, you can run each service individually.

  * **Run API:**
    ```bash
    cd Api
    npm install
    npm run dev
    ```
  * **Run Client:**
    ```bash
    cd Client/Plantorium
    npm install
    npm run dev
    ```
  * **Run RAG Service:**
    ```bash
    cd Rag
    pip install -r requirements.txt
    python api.py
    ```

## Usage

1.  Navigate to `http://localhost:5173`.
2.  Click "Login" to authenticate through Auth0.
3.  You will be redirected to the Home page.
4.  If you're a new user, you'll be prompted to create your farm via the multi step form.
5.  Once your farm is created, you can access your "My Farm" dashboard to add crops.
6.  Use the "Chat" link to open the AI assistant and ask any gardening questions.
