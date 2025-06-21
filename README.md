 Expense Tracker App
A full-stack Expense Tracker web application built with the MERN stack (MongoDB, Express, React, Node) that allows users to securely track, add, update, and delete daily expenses. The app features authentication, a modern UI using ShadCN, and intuitive user interaction for real-time expense management.

 Features
1. User Authentication (Login/Signup)
2. Add new expenses (title, amount, category, date)
3. View all expenses in a table format
4. Edit and update expense entries
5. Delete individual expenses
6. Total balance calculation
7. Modern and responsive UI using ShadCN UI
8. Protected routes (only logged-in users can manage expenses)
9. Built with clean, scalable, and modular codebase

 Tech Stack
Frontend:

React.js (Vite)

ShadCN UI (TailwindCSS based)

Axios

Context API / Redux (if used)

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT for Authentication

Bcrypt for password hashing

 Screenshots
(Add 1–3 screenshots showing login, dashboard, and expense table)

 How to Run Locally
bash
Copy
Edit
# Clone the repo
git clone https://github.com/yourusername/expense-tracker.git

# Navigate into project
cd expense-tracker

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Set up .env for backend (Mongo URI, JWT secret)
# Run the backend
npm run dev

# Run the frontend
cd ../client
npm run dev
 Environment Variables (Backend)
Create a .env file in the server folder:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
 Folder Structure
bash
Copy
Edit
expense-tracker/
├── client/       # React Frontend
│   └── ...
├── server/       # Node + Express Backend
│   └── models/
│   └── routes/
│   └── controllers/
│   └── middleware/
├── README.md
 CRUD Operations Included
Create: Add new expense

Read: View all expenses for a user

Update: Edit an existing expense

Delete: Remove an expense permanently

 About Me
Vaibhav Kandharkar
I’m a passionate Full Stack Developer working with modern technologies to build clean, user-friendly applications.
