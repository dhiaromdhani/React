import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">EventApp</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/events">Événements</Link>
          <Link className="nav-link btn btn-success text-white ms-2" to="/add-event">
            Add new Event
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;