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
          fontFamily: "Arial",
        }}
      >
        <h1>🎓 EventIQ Dashboard</h1>

        <p>Smart Campus Event Management System</p>

        {stats && (
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{stats.totalEvents}</h2>
              <p>Total Events</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{stats.totalUsers}</h2>
              <p>Total Users</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{stats.totalAttendance}</h2>
              <p>Total Attendance</p>
            </div>
          </div>
        )}

        <div style={{ marginTop: "40px" }}>
          <EventList />
        </div>

        <AIRecommendations />
        <EventForm />
        <LeaderboardList />
      </div>
    </>
  );
}

export default App;