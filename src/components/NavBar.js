import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export default function NavBar({ setTopic }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/articles/home">
          <Navbar.Brand onClick={() => setTopic(undefined)}>
            NCNews
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/articles/home">
              <Nav.Link onClick={() => setTopic(undefined)}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/cooking">
              <Nav.Link onClick={() => setTopic("cooking")}>Cooking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/football">
              <Nav.Link onClick={() => setTopic("football")}>Football</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/articles/coding">
              <Nav.Link onClick={() => setTopic("coding")}>Coding</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
