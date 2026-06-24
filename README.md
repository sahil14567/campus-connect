# 🎓 Campus Connect

A Full Stack Placement Management Portal built using the MERN Stack.

## 📌 Overview

Campus Connect is a web-based platform that simplifies the campus placement process for students and administrators. Students can register, browse available job opportunities, and apply directly through the portal, while administrators can manage and publish job postings.

---

## 🚀 Features

### Student Module

* Student Registration
* Secure Login Authentication
* View Available Jobs
* Apply for Jobs
* Track Applications

### Admin Module

* Admin Login
* Add New Job Opportunities
* Manage Job Listings
* View Student Applications

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

---

## 📂 Project Structure

```text
Campus-Connect
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── routes
│   ├── models
│   ├── middlewares
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/campus-connect.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Future Enhancements

* Resume Upload
* Company Profiles
* Placement Analytics Dashboard
* Email Notifications
* Interview Scheduling

---

## Author

**Sahil Pandey**

B.E. Computer Science Engineering
Lokmanya Tilak College of Engineering, Mumbai University

---

⭐ If you like this project, consider giving it a star.
