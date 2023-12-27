import { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTokenAction, setProfilo } from "../redux/actions";
import image from "../assets/rentSmall.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseEndpoint = "http://35.181.223.102/api/v1/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInfo({
      email: username,
      password: password,
    });

    await postLogin(info);

    navigate("/all-cars");
  };

  const postLogin = async (data) => {
    try {
      const response = await fetch(baseEndpoint + "auth/login/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (response.ok) {
        const data = await response.json();

        dispatch(getTokenAction(data));
        const resp2 = await fetch(baseEndpoint + "auth/users/profilo", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const data2 = await response.json();
          await dispatch(setProfilo(data2));
        }
      } else {
        alert("Error login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="d-none d-md-block m-0 p-0">
      <Row>
        <Col md={6}>
          <Image src={image} style={{ height: "100vh", width: "100%" }} />
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="w-75 ms-4 justify-content-start">
            <Image src="/assets/positvo.png" />
          </div>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Inserisci la tua e-mail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mt-3" style={{ width: "30rem" }}>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Button style={{ backgroundColor: "#2B75BC" }} size="lg" type="submit" className="mt-3">
              Accedi
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
