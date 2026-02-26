import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../services/api";

const AddEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event)
      .then(() => {
        navigate("/events");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Événement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lieu</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;