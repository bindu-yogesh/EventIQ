import { useEffect, useState } from "react";
import axios from "axios";

function LeaderboardList() {
  const [leaders, setLeaders] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/leaderboard")
      .then((res) => {
        setLeaders(res.data.leaderboard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "25px",
        }}
      >
        🏆 Leaderboard
      </h2>

      {leaders.map((user, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            margin: "15px auto",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            maxWidth: "900px",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            #{user.rank} {user.name}
          </h3>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Department: {user.department}
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#2563eb",
            }}
          >
            Points: {user.attendancePoints}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardList;