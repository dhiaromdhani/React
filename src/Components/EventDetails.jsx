import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getallEvents } from "../services/api";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [exists, setExists] = useState(true);

  useEffect(() => {
    getallEvents(id)
      .then((response) => {
        setEvent(response.data);
      })
      .catch(() => {
        setExists(false);
      });
  }, [id]);

  if (!exists) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Event does not exist</div>
        <Link to="/events" className="btn btn-secondary">Retour</Link>
      </div>
    );
  }

  if (!event) return <p>Chargement...</p>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{event.title}</h2>
          <p><strong>Description :</strong> {event.description}</p>
          <p><strong>Date :</strong> {event.date}</p>
          <p><strong>Lieu :</strong> {event.location}</p>
          <Link to="/events" className="btn btn-secondary">Retour</Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;