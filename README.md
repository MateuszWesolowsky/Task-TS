# Star Wars Data Explorer

A React application that consumes the [SWAPI](https://swapi.dev/) (Star Wars API) to display data in a table with pagination, filtering, and detailed view.

## Overview

**Star Wars Data Explorer** enables users to:

- Browse Star Wars characters
- Navigate through pages of data using pagination
- Filter/search for characters by name
- View detailed information by clicking on a table row
- Enjoy a responsive, modern user interface with error handling and loading states

## Features

- **Data Display:**  
  Renders data from SWAPI in a well-structured table.

- **Pagination:**  
  Navigate through data pages using Previous/Next buttons.

- **Filtering:**  
  Filter characters by name in real-time.

- **Detail View:**  
  Click on a character row to see detailed information fetched via a custom hook.

- **Global State Management:**  
  Uses Zustand to manage and share state across components.

## Technologies Used

- **React**
- **Vite**
- **Tailwind CSS**
- **TypeScript**
- **React Query**
- **Axios**

## Installation

- **git clone**
- **npm install**
- **npm run dev**
