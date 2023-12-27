import { Card, Col, Container, ListGroup, Row, Form } from "react-bootstrap";
import TopBar from "./TopBar";

import { useState } from "react";
import SingleCar from "./SingleCar";

const AllCar = () => {
  const [info, setInfo] = useState({ dataStart: "", dataEnd: "" });
  const changeInfo = (nome, value) => {
    setInfo({ ...info, [nome]: value });
  };
  return (
    <Container fluid className="bg-dark ">
      <TopBar />
      <Row className="justify-content-center mx-5">
        <Col xs={8} className="mx-5 p-5">
          <Card id="formRow">
            <Card.Body>
              <Row>
                <Col xs="6">
                  <Form.Group className="mb-3">
                    <Form.Label>Data di Inizio Noleggio *</Form.Label>
                    <Form.Control
                      type="date"
                      value={info.dataStart}
                      onChange={(e) => changeInfo(e.target.value, "dataEmissione")}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group className="mb-3">
                    <Form.Label>Data di Fine Noleggio *</Form.Label>
                    <Form.Control
                      type="date"
                      value={info.dataEnd}
                      onChange={(e) => changeInfo(e.target.value, "dataEmissione")}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Card style={{ background: "orange" }}>
          <Card.Body>Risultati:</Card.Body>
        </Card>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col xs={10}>
          <ListGroup as="ul">
            <ListGroup.Item className="mb-3" as="li">
              <SingleCar />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3" as="li">
              <SingleCar />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3" as="li">
              <SingleCar />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3" as="li">
              <SingleCar />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default AllCar;
