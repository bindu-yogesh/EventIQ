# 🎓 EventIQ - Smart Campus Event Management System

## 📌 Overview

EventIQ is a Smart Campus Event Management System designed to simplify event organization, student participation, attendance tracking, and event analytics.

The platform enables organizers to create and manage events while providing students with personalized event recommendations, attendance tracking, and leaderboard-based engagement.

---

## 🚀 Features

### 📊 Dashboard Analytics

* Total Events
* Total Users
* Attendance Statistics
* Event Insights

### 📅 Event Management

* View Upcoming Events
* Create Events
* Manage Event Information
* Event Registration

### 🏆 Leaderboard System

* Student Ranking
* Attendance Points
* Gamification Features
* Achievement Tracking

### 🤖 AI-Powered Features

* AI Event Recommendations
* Event Description Generation
* Event Success Prediction
* Feedback Sentiment Analysis

### ✅ Attendance Management

* Attendance Tracking
* Event Participation Records
* Attendance Analytics

### 🔔 Notifications

* Event Updates
* Registration Alerts
* Event Reminders

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Axios
* Vite

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB (Planned/Integrated)

### Authentication

* JWT Authentication

### AI Integration

* Gemini API (Planned)
* AI Recommendation Engine

---

## 📂 Project Structure

```bash
EventIQ/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/EventIQ.git
cd EventIQ
```

### Backend Setup

```bash
cd backend

npm install

npx ts-node src/server.ts
```

Backend runs on:

```bash
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 📡 API Endpoints

### Dashboard

```http
GET /api/dashboard/stats
```

### Events

```http
GET /api/events
POST /api/events/create
```

### Leaderboard

```http
GET /api/leaderboard
```

### Recommendations

```http
GET /api/recommendations
```

### AI Services

```http
POST /api/ai/generate-description
POST /api/ai/success-score
POST /api/ai/sentiment
```

---

## 📸 Screenshots

### Dashboard

<img width="1812" height="1124" alt="Screenshot 2026-06-17 215655" src="https://github.com/user-attachments/assets/f537e9a9-ec89-49ca-86b0-d498feea62ec" />


### Events
<img width="1752" height="542" alt="Screenshot 2026-06-17 215726" src="https://github.com/user-attachments/assets/9bc4fc37-39ae-4283-b7d7-975f52c811d6" />


### Leaderboard
<img width="1786" height="768" alt="Screenshot 2026-06-17 215738" src="https://github.com/user-attachments/assets/0ff77018-f010-4de8-a5e0-fa186a125395" />


### AI Recommendations

<img width="1788" height="1220" alt="Screenshot 2026-06-17 215754" src="https://github.com/user-attachments/assets/0dfc2033-056c-4e96-96a3-ed3c43c68d4e" />

---

## 🎯 Future Enhancements

* User Authentication
* Role-Based Access Control
* QR Attendance System
* Certificate Generation
* Email Notifications
* Real-Time Event Updates
* Mobile Responsive UI
* Dark Mode
* Advanced Analytics

---

## 👨‍💻 Developer

**Bindu M Y**

* CSE Student
* Web Developer
* DSA Learner
* AI Enthusiast

---

## 📄 License

This project is developed for learning, portfolio, and educational purposes.
