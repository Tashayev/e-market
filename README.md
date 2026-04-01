# E-Market — React E-Commerce Application

Modern e-commerce application built with React, TypeScript, Redux Toolkit, and Vite.

The project demonstrates scalable frontend architecture (FSD approach), centralized API handling, authentication flow, and optimized state management.

---

## Live Demo

https://adil-e-market.netlify.app/

> Example route:  
https://adil-e-market.netlify.app/auth

---

## Tech Stack

- React 19
- TypeScript
- Redux Toolkit + Redux Persist
- React Router
- Axios (with interceptors)
- React Hook Form + Yup
- MUI (Material UI)
- Vite
- Jest + React Testing Library

**API:** https://api.escuelajs.co/api/

---

## Features

- Authentication (login with token-based flow)
- Protected routes
- Global state management (Redux Toolkit)
- Persistent state via redux-persist
- Centralized API layer with Axios
- Axios interceptors for auth handling
- Product catalog with dynamic rendering
- Form validation (React Hook Form + Yup)
- Toast notifications
- Debounced search
- Feature-Sliced Design (FSD-inspired structure)

---

## Architecture

The project follows an FSD-inspired architecture:

- Scalable structure
- Separation of concerns
- Reusable modules
- Maintainable codebase

---

## Authentication Flow

1. User logs in via REST API  
2. Token is stored in Redux state  
3. State is persisted using redux-persist  
4. Axios interceptors attach token to requests  
5. Protected routes restrict unauthorized access  

---

## Installation & Run

```bash
git clone https://github.com/Tashayev/e-market.git
cd e-market
npm install
npm run dev
