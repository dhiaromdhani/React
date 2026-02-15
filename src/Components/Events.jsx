import { useState, React } from 'react';
import Event from "./event";
import eventData from "../data/events.json";
import { Col, Row } from 'react-bootstrap';


function Events() {
    return (
        <>
        <Row>
        {
            eventData.map((event) => (
                <Col key={event.id}>
                    <Event     
                        event={event}
                    />
                </Col>
            ))}
        </Row>
        </>
    );
}

export default Events;



