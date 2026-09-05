# Apple iPhone Landing Page (Product Showcase Web Application)

**Live Demo:** [https://omarahmed321.github.io/first-task-with-react/](https://omarahmed321.github.io/first-task-with-react/)

A responsive **product showcase landing page** modeled after Apple hardware unveilings, built with **React**, **Bootstrap 5**, **Vite**, and custom **CSS3**. The application highlights modular frontend component composition, structured typography hierarchy, and fluid cross-device layout design.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

## Table of Contents

- [About](#about)
- [Data Storage and Architecture](#data-storage-and-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

## About

Translating complex high-fidelity hardware presentations into efficient frontend code requires disciplined component structuring. This project replicates an official Apple iPhone marketing landing page to demonstrate foundational React component design, Bootstrap grid integration, and custom CSS styling. It provides an interactive, responsive presentation without relying on heavy external UI component libraries.

## Data Storage and Architecture

The application functions as a static client-side web application with no database or backend dependencies. Content strings, visual asset paths, and navigation references are encapsulated directly within discrete React components and rendered to the virtual DOM. This design ensures instant page load performance, zero server-side maintenance, and seamless edge delivery via static web hosting.

## Features

- **Modular Component Breakdown**: Divides the layout into discrete presentation modules including Nav, HeroSection, upper, product, lower, and Footer.
- **Interactive Product Presentation**: Renders high-resolution product imagery and specification callouts with balanced typographic contrast.
- **Responsive Layout Grid**: Combines Bootstrap 5 utility classes with custom CSS flexbox containers to adapt across desktop, tablet, and mobile viewports.
- **Apple-Inspired Navigation Bar**: Provides global header navigation links structured around primary product categories and brand services.
- **Comprehensive Directory Footer**: Implements multi-column site navigation menus and legal notices modeled after official hardware portals.
- **Optimized Vite Bundling**: Leverages Vite for instant hot module replacement during development and minimal production assets.

## Tech Stack

- [React](https://react.dev/) - Component Architecture and Declarative UI
- [Bootstrap](https://getbootstrap.com/) - Responsive Grid System and Base Utilities
- [Vite](https://vite.dev/) - Build Tool and Development Server
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Application Logic
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Custom Styling and Media Queries
- [GitHub Pages](https://pages.github.com/) - Static Hosting and Continuous Deployment

## Run Locally

### Prerequisites

Ensure you have Node.js 18 or later installed on your system.

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

4. Start the local development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser to view the application.

### Production Build

To compile the optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
first-task-with-react/
├── public/                    # Static public assets
├── src/
│   ├── assets/                # Supporting graphical assets
│   ├── App.css                # Component styling overrides
│   ├── App.jsx                # Root application view orchestrator
│   ├── Footer.jsx             # Multi-column directory footer
│   ├── HeroSection.jsx        # Hero section wrapper for hardware highlights
│   ├── index.css              # Global style resets and typography
│   ├── iphone.png             # High-resolution device product imagery
│   ├── lower.jsx              # Standard iPhone feature section
│   ├── main.jsx               # React DOM entrypoint
│   ├── Nav.jsx                # Top global navigation bar
│   ├── product.jsx            # Hardware showcase image container
│   └── upper.jsx              # iPhone Pro flagship announcement banner
├── eslint.config.js           # Linting configuration
├── index.html                 # HTML document shell
├── package.json               # Project dependencies and operational scripts
└── vite.config.js             # Vite development and build configuration
```
