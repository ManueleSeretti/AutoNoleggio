import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCar = ({ info }) => {
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
              <span>{info.model}</span>
            </Col>
            <Col xs="3">
              <p>categoria</p>
              <span>{info.categoria}</span>
            </Col>
            <Col xs="3">
              <p>alimentazione</p>
              <span>{info.alimentazione}</span>
            </Col>
            <Col xs="3">
              <p>Anno</p>
              <span>{info.year}</span>
            </Col>
          </Row>
        </div>
        <Button onClick={() => navigate("/prenotazione")}> PRENOTA ORA</Button>
      </Col>
    </Row>
  );
};
export default SingleCar;
