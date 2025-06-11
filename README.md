# CV Management System

A full-stack web application for managing CVs and job listings, built with React, Node.js, Express, and MongoDB.

---

## Features

- User authentication (sign up, sign in, logout)
- View and search job listings (fetched from Adzuna API)
- Save/bookmark jobs
- Responsive UI with React and Bootstrap
- Secure backend with Express and JWT authentication

---

## Project Structure
```
CV-Management-System/
├── client/                # React frontend
│   ├── src/
│   ├── public/
│   └── ...
├── server/                # Node.js/Express backend
│   ├── Controllers/
│   ├── Models/
│   ├── Routers/
│   └── ...
├── .gitignore
├── README.md
└── ...
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB (local or Atlas)
- [Adzuna API credentials](https://developer.adzuna.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CV-Management-System.git
cd CV-Management-System
```

### 2. Setup Environment Variables

Create `.env` files in both `client` and `server` directories as needed.

**Example for `server/.env`:**
```
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key
```

---

### 3. Install Dependencies

#### For the backend:
```bash
cd server
npm install
```

#### For the frontend:
```bash
cd ../client
npm install
```

---

### 4. Run the Application

#### Start the backend server:
```bash
cd ../server
node index.js
```

#### Start the frontend React app:
```bash
cd ../client
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000)
- The backend will run on [http://localhost:3001](http://localhost:3001)

---

## Usage

- Register or sign in as a user.
- Browse job listings.
- Save/bookmark jobs you are interested in.
- Logout when done.

---

## Notes

- **Do not commit your `.env` files**. They are ignored via `.gitignore`.
- Make sure your Adzuna API credentials are valid.
- For production, set up secure environment variables and use HTTPS.

---

## License

This project is licensed under the MIT License.