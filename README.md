E-Market — React E-Commerce Application

Modern e-commerce application built with React, TypeScript, Redux Toolkit, and Vite.

The project demonstrates scalable architecture (FSD approach), centralized API handling, authentication flow, and optimized state management.

🚀 Live Demo

🔗 https://hhemploeesearch.netlify.app

🧠 Tech Stack

React 19

TypeScript

Redux Toolkit + Redux Persist

React Router

Axios (with interceptors)

React Hook Form + Yup validation

MUI (Material UI)

Vite

Jest + React Testing Library

API: https://api.escuelajs.co/api/

⚙️ Features

User authentication (login / token-based flow)

Protected routes

Global state management via Redux Toolkit

Persistent store using redux-persist

API layer abstraction with Axios

Axios interceptors for centralized request/response handling

Product catalog with dynamic rendering

Form validation using React Hook Form + Yup

Toast notifications

Debounced search

Modular feature-based structure (FSD-inspired)

🏗 Architecture

The project follows a feature-based structure inspired by FSD (Feature-Sliced Design):

src/
 ├── app/
 ├── pages/
 ├── features/
 ├── entities/
 ├── shared/


This structure improves:

Scalability

Separation of concerns

Reusability

Maintainability

🔐 Authentication Flow

Login request via REST API

Token stored in Redux state

Persisted via redux-persist

Axios interceptors attach token to requests

Protected routes block unauthorized access

📦 Installation
git clone https://github.com/Tashayev/your-repo-name
cd your-repo-name
npm install
npm run dev

🧪 Testing

Jest + React Testing Library configured for component testing.

npm run test

📌 Project Purpose

This project was built to demonstrate:

Scalable frontend architecture

Clean state management

Proper API abstraction

Authentication handling

Production-ready structure
