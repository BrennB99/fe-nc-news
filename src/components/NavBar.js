import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export default function NavBar({ setTopic }) {
  return (
    <Navbar className="navbar-custom">
      <Container>
        <LinkContainer to="/articles/home">
          <Navbar.Brand>NCNews</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/articles/home">
              <Nav.Link className="nav-links">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/cooking">
              <Nav.Link className="nav-links">Cooking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/football">
              <Nav.Link className="nav-links">Football</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/coding">
              <Nav.Link className="nav-links">Coding</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
