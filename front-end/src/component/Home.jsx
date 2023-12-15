import backGround from "../assets/bg-autoNoleggio.png";
import TopBar from "./TopBar";

const { Container, Row, Col, Card } = require("react-bootstrap");

const Home = () => {
  return (
    <Container fluid style={{ backgroundImage: `url(${backGround})`, width: "100%" }}>
      <TopBar />
      <Row className="justify-content-between">
        <Col xs="4">
          {" "}
          <Card className="mx-auto " style={{ width: "18rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="4">
          {" "}
          <Card className="mx-auto" style={{ width: "18rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="4">
          {" "}
          <Card className="mx-auto" style={{ width: "18rem", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
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
    </Container>
  );
};
export default Home;
