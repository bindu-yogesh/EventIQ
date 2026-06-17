import { useState } from "react";

function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent = {
      title,
      date,
    };

    console.log("New Event:", newEvent);

    alert("Event Created Successfully!");

    setTitle("");
    setDate("");
  };

  return (
    <div
      style={{
        marginTop: "40px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    >
      <h2>➕ Create Event</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
          }}
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;