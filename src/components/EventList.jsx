import  Sentiment from "sentiment";
const sentiment = new Sentiment();

import React, { useState, useEffect } from "react";
import { addEvent, getEvents, deleteEvent } from "../firebaseServices";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    const result = sentiment.analyze(newEvent);
    await addEvent({
        name: newEvent,
        sentiment: result.score > 0 ? "Positive" : result.score < 0 ? "Negative" : "Neutral",
    });
    const eventsData = await getEvents();
    setEvents(eventsData);
    setNewEvent("");
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    const eventsData = await getEvents();
    setEvents(eventsData);
  };

  return (
    <div>
      <h2>My Schedule</h2>
      <input
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="Add new event"
      />
      <button onClick={handleAddEvent}>Add Event</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name}
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
