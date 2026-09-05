# React Bank Account Simulator (Single-Page Application - SPA)

**Live Demo:** [first-task-with-react.vercel.app](https://first-task-with-react.vercel.app/)

A lightweight **banking account interface** built with **React** to manage core **account transactions**. Users can monitor their active **account balance**, execute **deposits**, and process **withdrawals** with real-time UI updates and client-side validation. The application demonstrates fundamental React patterns including **hooks**, **controlled components**, and **state manipulation**.

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

## Table of Contents

- [About](#about)
- [State Management](#state-management)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

## About

Basic financial operations require immediate user feedback and accurate balance calculations. This interface provides an interactive dashboard to simulate personal banking transactions without backend latency. It ensures users cannot overdraft funds while providing a clear visual representation of their available balance.

## State Management

The application stores all account metrics in local component state via the React `useState` hook. This approach provides instantaneous UI rerendering on balance changes without requiring external database synchronization or backend servers.

## Features

- **Balance Overview**: Display real-time account balances updated after every successful transaction.
- **Deposit Funds**: Increase account balances through validated numeric inputs.
- **Withdraw Funds**: Deduct specified values from the active balance with overdraft protection.
- **Input Validation**: Prevent negative values, zero amounts, and non-numeric entries from triggering updates.
- **Transaction Feedback**: Show contextual alerts for insufficient balances and successful account operations.

## Tech Stack

- [React](https://react.dev/) (Component architecture and hooks)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+ logic)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Interface layout and styling)
- [Vite](https://vitejs.dev/) (Build tool and development server)

## Run Locally

Clone the repository:

```bash
git clone [https://github.com/omarahmed321/first-task-with-react.git](https://github.com/omarahmed321/first-task-with-react.git)
cd first-task-with-react
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```text
first-task-with-react/
├── src/
│   ├── components/       # Banking card and input controls
│   ├── App.jsx           # Root component managing account state
│   ├── main.jsx          # React DOM mounting entry point
│   └── App.css           # Component styles
├── public/               # Static assets
├── index.html            # HTML template
└── package.json          # Project configuration and dependencies
```
