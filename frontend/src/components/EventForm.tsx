import { useState } from "react";
import axios from "axios";

function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/events/create",
        {
          title,
          description,
          category,
          venue,
          date,
        }
      );

      console.log(res.data);

      alert("🎉 Event Created Successfully!");

      setTitle("");
      setDescription("");
      setCategory("");
      setVenue("");
      setDate("");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to create event");
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow:
          "0 4px 15px rgba(0,0,0,0.1)",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "25px",
        }}
      >
        ➕ Create Event
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) =>
            setVenue(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Create Event 🚀
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  marginBottom: "15px",
  boxSizing: "border-box" as const,
};

export default EventForm;