import { useEffect, useState } from "react";
import axios from "axios";

function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recommendations")
      .then((res) => {
        setRecommendations(res.data.recommendations || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        🤖 AI Recommendations
      </h2>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "25px",
          color: "#555",
        }}
      >
        Total Recommendations: {recommendations.length}
      </p>

      {recommendations.map((item, index) => (
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
              fontSize: "30px",
              marginBottom: "12px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            <strong>Category:</strong> {item.category}
          </p>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            <strong>Date:</strong> {item.date}
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            <strong>Venue:</strong> {item.venue}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AIRecommendations;