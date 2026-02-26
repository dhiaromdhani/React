import React, { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getallEvents } from "../service/api";
import { deleteEvent } from "../services/api";

function event({ event, buy, toggleLike, onDelete }) {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getallEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

   const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer cet événement ?")) {
      deleteEvent(event.id)
        .then(() => {
          onDelete(event.id);
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression", error);
        });
    }
  };
  return (
    <>
      <div>
        <h2>Events List</h2>
        {events.map((event) => (
          <div key={event.id}>
            <h4>{event.title}</h4>
            <p>{event.date}</p>
            <Link to={`/events/${event.id}`} className="btn btn-primary me-2">
              Détails
            </Link>
            <Link to={`/update-event/${event.id}`} className="btn btn-warning me-2">
              Update Event
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete Event
            </button>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
      <Col md={12} className="mb-6">
        <Card>
          <Card.Img variant="top" src={`/image/${event.img}`} alt={event.name} />
          <Card.Body>
            <div className="card-body">
              <Link to={`/event/${event.name}`} style={{ textDecoration: "none" }}>
                <h5 className="card-title">{event.name}</h5>
              </Link>
            </div>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>Price: {event.price} DT</Card.Text>
            <Card.Text>Tickets: {event.nbTickets}</Card.Text>
            <Card.Text>Participants: {event.nbParticipants}</Card.Text>

            {event.nbTickets === 0 && (
              <p className="text-danger fw-bold">Sold Out</p>
            )}

            <Button
              variant="primary"
              disabled={event.nbTickets === 0}
              onClick={() => buy(event.id)}
              className="me-2"
            >
              Book an event
            </Button>

            <Button
              variant={event.like ? "danger" : "success"}
              onClick={() => toggleLike(event.id)}
            >
              {event.like ? "Dislike" : "Like"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default event;