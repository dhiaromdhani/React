import React, { useEffect, useState } from "react";
import { getallEvents } from "../service/api";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getallEvents()
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des événements", error);
      });
  }, []);

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Liste des Événements</h2>
      <div className="row">
        {events.map((event) => (
          <Event key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

const Event = ({ event, onDelete }) => {
  return (
    <div className="col-md-4 mb-3" key={event.id}>
      <div className="card">
        <div className="card-body">
            <img src={`/image/${event.img}`} className="card-img-top" alt={event.title} />
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.date}</p>
          <p className="card-text">{event.location}</p>
          <Link to={`/events/${event.id}`} className="btn btn-primary">
            Voir détails
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(event.id)}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;