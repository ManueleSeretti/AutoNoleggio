import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HouseDoorFill } from "react-bootstrap-icons";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#home">Car Rent</Navbar.Brand>{" "}
        <Nav className="me-auto d-flex">
          <div className="d-flex">
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/">
              <HouseDoorFill className="fs-4 mx-3" /> <span style={{ fontSize: "12px" }}>Home</span>
              {location.pathname === "/" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="all-cars">
              <IoCarSportSharp className="fs-4 mx-3" />
              <span style={{ fontSize: "12px" }}>Tutti i veicoli</span>
              {location.pathname === "/" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
            <Link className="d-flex flex-column justify-content-center align-items-center nav-link" to="/profilo">
              <FaUserAlt className="fs-4 mx-3" />
              <span style={{ fontSize: "12px" }}>Profilo</span>
              {location.pathname === "/" ? (
                <div className="bg-black border-transition" style={{ width: "100%", height: "3px" }}></div>
              ) : (
                <div style={{ width: "100%", height: "3px" }}></div>
              )}
            </Link>
          </div>
        </Nav>{" "}
        <Link to="/amministrazione">
          <Button>Sezione Amministrazione</Button>
        </Link>
      </Container>
    </Navbar>
  );
};
export default TopBar;
