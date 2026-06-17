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
    <div style={{ marginTop: "40px" }}>
      <h2>🏆 Leaderboard</h2>

      {leaders.map((user, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <h3>
            #{user.rank} {user.name}
          </h3>

          <p>Department: {user.department}</p>

          <p>Points: {user.attendancePoints}</p>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardList;