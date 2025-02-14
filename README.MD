<!-- ### Front end Technologies:
Next Js,  Redux Toolkit, Reduc Toolkit Query
Tailwind CSS, Recharts, Material UI

## Backend Technologies:
Node Js + Express Js + Prisma( to manage interactions iwth postgre SQL DB)
## Cloud:
AWS(EC2 hosting backend)
RDS(Postgres DB)
Amplify( hosting Next JS)
S3( inventories ) -->

# Stock Pilot
## Table of Contents

![](client/public/home%20page.png)
![](client/public/products%20page.png)
![](client/public/inventory%20page.png)
![](client/public/settings%20page.png)
![](client/public/users%20page.png)
![](client/public/expenses%20page.png)

- [Description](#description)
- [Features](#features)
- [Tech Stack Used](#teck-stack)
- [Folder structure](#folder-structure)
- [Getting started](#getting-started)

## Description
This is a full-stack web application built with modern technologies, designed to manage various business operations efficiently. The application includes multiple pages for handling different aspects of business management, such as inventory, expenses, products, users, and settings.


## Features
- **Home Page**: Overview of the application's key metrics and insights.
- **Dashboard**: Provides analytical data and key performance indicators.
- **Expenses Page**: Tracks business expenses with detailed breakdowns.
- **Inventory Page**: Manages stock levels, incoming shipments, and product listings.
- **Products Page**: Lists available products with their details and pricing.
- **Users Page**: Handles user management, including roles and permissions.
- **Settings Page**: Configurations and preferences for customizing the application.

## Tech Stack
### Frontend:
- **React.js** (with Next.js) – For building the client-side UI.
- **Tailwind CSS** – For modern, responsive styling.
- **Vercel** – For deployment and hosting.

### Backend:
- **Node.js** – Server-side runtime.
- **Express.js** – Web framework for building API endpoints.
- **PostgreSQL**– For data storage and management.

## Folder Structure
```
client/
  ├── public/            # Static assets like images
  ├── src/
      ├── app/
          ├── components/  # Reusable UI components
          ├── dashboard/   # Dashboard page
          ├── expenses/    # Expenses management
          ├── inventory/   # Inventory handling
          ├── products/    # Product listings
          ├── settings/    # User settings
          ├── users/       # User management
      ├── state/
          ├── api.ts       # API calls and configurations
          ├── index.ts     # State management setup

server/
  ├── routes/            # API route handlers
  ├── models/            # Database models
  ├── controllers/       # Business logic and API controllers
  ├── config/            # Configuration files
  ├── index.js           # Entry point for backend
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Postgres](https://www.postgresql.org/)

### Installation

**Environment Variables Setup**
The project relies on environment variables for configuration. Follow the instructions below to set up the necessary environment variables:<br>

Client-side Environment Variables<br>
Create a .env file in the client directory and add the following variable:<br>

`NEXT_PUBLIC_API_BASE_URL="http://localhost:8000"`<br>
This variable defines the base URL for API requests in the client-side code.<br>

Server-side Environment Variables<br>
Create a .env file in the server directory and add the following variables:<br>

`DATABASE_URL="YOUR_POSTGRES_DATABASE_URL"`<br>
`PORT=8000`<br>
Ensure to replace YOUR_MONGODB_URL with your actual MongoDB URL. The PORT variable specifies the port number for the server.<br>

Note: Environment variables containing sensitive information like API keys, database credentials, or any other secrets should not be committed to version control. Ensure that the .env files are included in your project's .gitignore file to prevent accidental exposure of sensitive data.<br>

### Setup

1. Clone this repository to your local machine:<br>
`git clone https://github.com/divyalaldinani/StockPilot`
2. Change to the project directory:<br>
`cd StockPilot`
3. Install and run client dependencies:<br>
`cd client`<br>
`npm install`<br>
`npm run dev`
4. Install and run server dependencies:<br>
`cd server`<br>
`npm install`<br>
`npm run dev`

5. Open your web browser and visit http://localhost:3000 to see the website in action during development.

