# Apple iPhone Landing Page (Early React Practice Project)

**Live Demo:** [https://first-task-with-react.vercel.app](https://first-task-with-react.vercel.app/)

A simple **product landing page** modeled after an Apple iPhone reveal, built with **React**, **Bootstrap 5**, and **Vite**. This project represents an early milestone created while first learning React component architecture, with a primary focus on UI decomposition.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Table of Contents

- [About](#about)
- [Data Storage and Architecture](#data-storage-and-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

## About

This project was built as an early learning exercise when first starting out with React. The primary goal was to understand how to build and structure UI components by breaking down a complete user interface into smaller, reusable parts.

## Data Storage and Architecture

The project is a static frontend application with no database or backend logic. All content and visual assets are stored directly within modular React UI components and rendered on the client side.

## Features

- **UI Component Breakdown**: Divides a full landing page interface into dedicated components including navigation, hero sections, product containers, and footer.
- **Product Presentation**: Displays device imagery and typography modeled after an official iPhone reveal.
- **Bootstrap Integration**: Uses Bootstrap 5 utility classes for basic grid alignment and responsive spacing.
- **Fast Local Development**: Uses Vite for rapid local development and hot module reloading.

## Tech Stack

- [React](https://react.dev/) - Frontend Component Library
- [Bootstrap](https://getbootstrap.com/) - Layout and Utilities
- [Vite](https://vite.dev/) - Build Tool and Development Server
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Application Logic
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Custom Styling
- [Vercel](https://vercel.com/) - Static Hosting and Deployment

## Run Locally

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation and Execution

1. Clone the repository:
```bash
git clone https://github.com/omarahmed321/first-task-with-react.git
```

2. Navigate to the project directory:
```bash
cd first-task-with-react
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser.

## Project Structure

```text
first-task-with-react/
├── public/                    # Static public assets
├── src/
│   ├── assets/                # Supporting assets
│   ├── App.css                # Component styling overrides
│   ├── App.jsx                # Root view container
│   ├── Footer.jsx             # Page footer links
│   ├── HeroSection.jsx        # Product highlight container
│   ├── index.css              # Global styles
│   ├── iphone.png             # Product display image
│   ├── lower.jsx              # Secondary product section
│   ├── main.jsx               # Application entrypoint
│   ├── Nav.jsx                # Navigation bar
│   ├── product.jsx            # Product image container
│   └── upper.jsx              # Primary banner section
├── index.html                 # HTML document shell
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration
```
