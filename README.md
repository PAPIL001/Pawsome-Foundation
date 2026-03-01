<div align="center">
  <h1>🐾 Pawsome Foundation</h1>
  <p><strong>A modern, full-stack React application for the Pawsome Foundation animal rescue and sanctuary in Lucknow, India.</strong></p>
  
  <a href="https://pawsome-foundation.vercel.app/" target="_blank">View Live Site</a>
</div>

<br />

## 📖 About the Project

This project is a complete architectural rebuild of the original Pawsome Foundation website. It transitions the application from a legacy static HTML/CSS/JS site into a modern, component-driven **React User Interface** powered by a **Node.js/Express Backend**.

The primary goal of this platform is to raise awareness for the 280+ animals currently residing at the sanctuary and to provide an intuitive, frictionless donation portal for supporters.

## ✨ Key Features

*   **Responsive Modern UI:** Completely reimagined mobile-first design using Tailwind CSS. Features glassmorphism, dynamic gradients, and smooth scroll-triggered animations via Framer Motion.
*   **Animated Impact Counters:** Dynamic number-counting statistics highlighting the foundation's real-world impact (animals housed, meals served, lives saved).
*   **Interactive Media Gallery:** High-performance masonry photo grid with categorized filter chips (`All`, `Rescues`, `Feeding`, `Videos`).
*   **Custom Lightbox Integration:** Clicking on photos or video thumbnails opens a bespoke dark-mode lightbox modal, complete with a custom HTML5 video player for local `.mp4` rescue footage.
*   **Frictionless Donation Modal:** A robust donation popup displaying exact bank transfer details, an embedded QR code, and interactive "Copy to Clipboard" functionality for immediate support.
*   **Dark Mode Support:** Full system-preference and manual toggle support for a beautiful dark theme, persisting via Local Storage.
*   **Adoption Portal:** Dedicated section routing users instantly to contact and visitation information.

## 🛠️ Technology Stack

**Frontend Architecture (`/client`)**
*   **React 18** - UI Component Library
*   **Vite** - High-performance Next Generation Frontend Tooling
*   **React Router v6** - Client-side page routing
*   **Tailwind CSS v3** - Utility-first styling and design system
*   **Framer Motion** - Production-ready animation library
*   **Lucide React** - Beautiful & consistent iconography

**Backend Architecture (`/server`)**
*   **Node.js** - JavaScript runtime environment
*   **Express.js** - MVC structured web framework for handling API routing
*   **CORS & body-parser** - Middleware for cross-origin requests and JSON payload handling

## 📂 Project Structure

```text
pawsome-foundation/
├── client/                     # ⚛️ React Frontend Application
│   ├── public/                 # Static assets (images, videos, SVGs)
│   ├── src/
│   │   ├── components/         # Reusable UI parts (Navbar, Hero, Gallery, Donate)
│   │   ├── pages/              # Route-level views (Home, Adopt)
│   │   ├── App.jsx             # Main router and Dark Mode logic
│   │   ├── main.jsx            # React mounting point
│   │   └── index.css           # Tailwind directives & global variables
│   ├── tailwind.config.js      # Custom theme, colors, and fonts
│   └── package.json    
├── server/                     # ⚙️ Node/Express Backend API
│   ├── controllers/            # Request handling logic
│   ├── routes/                 # Express API endpoint definitions
│   ├── data/                   # JSON storage
│   ├── server.js               # Express application entry point
│   └── package.json
├── package.json                # 🚀 Root Vercel build configuration
└── vercel.json                 # 🚀 Vercel routing configuration
```

## 🚀 Local Development Setup

To run this project locally, you will need to start both the frontend and backend development servers.

### 1. Start the Backend API (Server)
```bash
cd server
npm install
node server.js
```
*The Express API will run on http://localhost:5000*

### 2. Start the Frontend App (Client)
Open a new terminal window:
```bash
cd client
npm install
npm run dev
```
*The Vite React development server will start on http://localhost:5173*


## 🌐 Vercel Deployment

This repository is pre-configured for seamless deployment to Vercel via the root `vercel.json` and `package.json` files.

Vercel will automatically detect the root setup, navigate into the `client/` directory, run the Vite build command, and serve the resulting production `dist/` folder.

1. Connect your GitHub repository to a new Vercel project.
2. Vercel will automatically read the `buildCommand` and `outputDirectory` from the `vercel.json` settings.
3. Your app will deploy instantly on push to the `main` branch.

<br />

<div align="center">
  <p>Made with ❤️ by Pawsome Foundation</p>
</div>
