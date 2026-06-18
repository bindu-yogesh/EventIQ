import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import LeaderboardList from "./components/LeaderboardList";
import AIRecommendations from "./components/AIRecommendations";
import EventForm from "./components/EventForm";

function App() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/stats")
      .then((res) => {
        setStats(res.data.stats);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f5f7fb",
          padding: "30px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
            marginBottom: "30px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Welcome to EventIQ 🚀
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
            }}
          >
            Smart Campus Event Management System powered by AI
          </p>
        </div>

        {/* Dashboard Heading */}
        <h1 style={{ marginBottom: "10px" }}>
          🎓 EventIQ Dashboard
        </h1>

        <p style={{ marginBottom: "25px" }}>
          Manage events, attendance, analytics and recommendations.
        </p>

        {/* Stats Cards */}
        {stats && (
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                width: "240px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                {stats.totalEvents}
              </h2>

              <p>Total Events</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                width: "240px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                {stats.totalUsers}
              </h2>

              <p>Total Users</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                width: "240px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                {stats.totalAttendance}
              </h2>

              <p>Total Attendance</p>
            </div>
          </div>
        )}

        {/* Events */}
        <div style={{ marginBottom: "40px" }}>
          <EventList />
        </div>

        {/* AI Recommendations */}
        <div style={{ marginBottom: "40px" }}>
          <AIRecommendations />
        </div>

        {/* Event Form */}
        <div style={{ marginBottom: "40px" }}>
          <EventForm />
        </div>

        {/* Leaderboard */}
        <div style={{ marginBottom: "40px" }}>
          <LeaderboardList />
        </div>
      </div>
    </>
  );
}

export default App;