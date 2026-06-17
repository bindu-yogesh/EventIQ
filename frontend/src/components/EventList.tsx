import { useEffect, useState } from "react";
import axios from "axios";

function EventList() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => {
        setEvents(res.data.events);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>📅 Events</h2>

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            background: "white",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>Attendees: {event.attendees}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;