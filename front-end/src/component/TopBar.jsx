import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#home">Car Rent</Navbar.Brand>
        <Nav className="me-auto d-flex">
          <div className="d-flex">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopBar;
