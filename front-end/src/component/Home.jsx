import backGround from "../assets/bg-autoNoleggio.png";
import TopBar from "./TopBar";

const { Container, Row, Col, Card } = require("react-bootstrap");

const Home = () => {
  return (
    <Container fluid className="p-0">
      <div
        style={{
          backgroundImage: `url(${backGround})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TopBar />
        <div className="d-flex flex-column justify-content-between align-items-between" style={{ height: "80%" }}>
          <Row className="justify-content-between">
            <Col xs="4" className="p-5">
              {" "}
              <Card className="mx-auto  " style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4" className="p-5">
              {" "}
              <Card className="mx-auto " style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4" className="p-5">
              {" "}
              <Card className="mx-auto " style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card body className="bg-dark text-warning">
            Vedi subito le vetture disponibili
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default Home;
