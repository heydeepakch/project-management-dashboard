# Project Management Dashboard

A web-based dashboard for managing projects and their associated tasks. This application allows users to organize work, track progress, and persist data locally.

## Features

- Project Management: Create and delete projects to categorize work.
- Task Management: Add, update, and delete tasks within specific projects.
- Status Tracking: Manage task progress with Todo, In Progress, and Done states.
- Progress Visualization: Automatic calculation of project completion percentage.
- Data Persistence: Automatic saving of project and task data to browser local storage.
- Responsive Layout: Includes sidebar and navigation components for efficient use.

## Tech Stack

- React 19: UI library for building the interface.
- Vite: Fast development build tool.
- TypeScript: Type safety for robust development.
- React Router: Client-side routing for multi-page navigation.
- ESLint: Code quality and linting.

## Prerequisites

- Node.js (Version 18 or higher recommended)
- npm (Node Package Manager)

## Setup Instructions

1. Navigate to the project directory:
   ```bash
   cd project-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually http://localhost:5173).

## Project Structure

- `src/components`: Reusable UI components like Navbar and TaskItem.
- `src/context`: Authentication and global state management.
- `src/hooks`: Custom React hooks for project logic and utilities.
- `src/pages`: Application views including Dashboard and Projects.
- `src/services`: API simulation and local storage handlers.
- `src/types`: TypeScript interfaces and type definitions.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

