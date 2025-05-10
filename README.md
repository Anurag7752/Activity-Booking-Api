# 📚 Basic Activity Booking Api (Backend API)

A simple REST API for activity booking like cricket matches, movies, football, etc. Built with **Node.js**, **Express.js**, and **MongoDB**.

✅ Includes user registration, login (JWT), activity listing, booking, and viewing user bookings.

---

## 🚀 Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB (using Mongoose)
- **Auth:** JWT Token-based authentication
- **Validation:** express-validator
- **Password Hashing:** bcryptjs
- **API Testing:** Postman Collection ✅

---

## 📦 Folder Structure

```
├── controllers
│   ├── activityController.js
│   ├── bookingController.js
│   └── userController.js
├── models
│   ├── Activity.js
│   ├── Booking.js
│   └── User.js
├── routes
│   ├── activityRoutes.js
│   ├── bookingRoutes.js
│   └── userRoutes.js
├── middleware
│   └── authMiddleware.js
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone YOUR_GITHUB_REPO_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=3000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### 4. Start the Server
```bash
npm run start  # uses nodemon
```

Server will run at:  
`http://localhost:3000`

---

## 🔥 API Endpoints

### 1️⃣ User Registration
**POST** `/api/users/register`

---

### 2️⃣ User Login
**POST** `/api/users/login`


✔️ **Response:** `token`

---

### 3️⃣ List Activities (Public)
**GET** `/api/activities`

---

### 4️⃣ Book Activity (Auth Required)
**POST** `/api/bookings`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN

```

**Body:**

---

### 5️⃣ Get My Bookings (Auth Required)
**GET** `/api/bookings/my`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN

```

✔️ Returns all bookings by the logged-in user.

---

## ✅ Features Implemented

- User Register & Login with hashed password
- JWT Token-based authentication
- Public endpoint to list activities
- Authorized users can book activities
- Users can view their own bookings
- Input validation using `express-validator`
- Clean folder structure (MVC)

---

## 📅 Submission Checklist

- (https://github.com/Anurag7752/Activity-Booking-Api)✅
- (https://activity-booking-api-ixm2.onrender.com/)

---

## 👨‍💻 Author

**Anurag Kumar**  
Backend Developer  
[GitHub](https://github.com/Anurag7752)  

---

Feel free to ⭐️ the repo if you find it useful!