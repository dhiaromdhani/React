import React, { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function event({ event, buy, toggleLike }) {
  return (
    
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
  );
}

export default event;