import { Card, Col, Container, ListGroup, Row, Form } from "react-bootstrap";
import TopBar from "./TopBar";

import { useEffect, useState } from "react";
import SingleCar from "./SingleCar";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllCars } from "../redux/actions";

const AllCar = () => {
  const [info, setInfo] = useState({ dataStart: "", dataEnd: "" });
  const carsList = useSelector((state) => state.data.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllCars());
  }, []);
  useEffect(() => {
    console.log(carsList);
  }, [carsList]);
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
            {carsList &&
              carsList.map((cars) => (
                <ListGroup.Item className="mb-3" as="li">
                  <SingleCar info={cars} />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default AllCar;
