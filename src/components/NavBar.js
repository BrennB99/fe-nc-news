import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export default function NavBar({ setTopic }) {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <LinkContainer to="/articles/home">
          <Navbar.Brand>NCNews</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/articles/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/cooking">
              <Nav.Link>Cooking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/football">
              <Nav.Link>Football</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/coding">
              <Nav.Link>Coding</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
