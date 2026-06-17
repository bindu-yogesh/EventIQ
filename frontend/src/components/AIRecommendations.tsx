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
    <div style={{ marginTop: "40px" }}>
      <h2>🤖 AI Recommendations</h2>

      <p>Total Recommendations: {recommendations.length}</p>

      {recommendations.map((item, index) => {
        return (
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
            <h3>{item.title}</h3>

            <p>Category: {item.category}</p>

            <p>Date: {item.date}</p>

            <p>Venue: {item.venue}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AIRecommendations;