import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCar = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col xs="3">
        <div style={{ width: "150px", height: "150px", backgroundColor: "Grey" }}></div>
      </Col>
      <Col xs="9" className="d-flex flex-column justify-content-between">
        <div>
          <Row>
            <Col xs="3">
              <p>Modello</p>
            </Col>
            <Col xs="3">
              <p>categoria</p>
            </Col>
            <Col xs="3">
              <p>alimentazione</p>
            </Col>
            <Col xs="3">
              <p>kilometraggio</p>
            </Col>
          </Row>
        </div>
        <Button onClick={() => navigate("/prenotazione")}> PRENOTA ORA</Button>
      </Col>
    </Row>
  );
};
export default SingleCar;
