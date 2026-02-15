import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Events</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "nav-link text-warning" : "nav-link"
            }
          >
            MyEvents
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
