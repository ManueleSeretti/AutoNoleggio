import { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTokenAction, setProfilo } from "../redux/actions";
import image from "../assets/rentSmall.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.login.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseEndpoint = "http://localhost:3001/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postLogin({
      email: username,
      password: password,
    });

    // navigate("/all-cars");
  };

  const postLogin = async (info) => {
    console.log(info);
    try {
      const response = await fetch(baseEndpoint + "auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(info),
      });
      if (response.ok) {
        const token = await response.json();
        console.log(response);

        dispatch(getTokenAction(token));
      }
    } catch (error) {
      console.log(error);
      console.log("porco dio");
    }
  };

  const getProfile = async (info) => {
    console.log(info);
    try {
      const resp = await fetch(baseEndpoint + "users/profilo", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
        mode: "cors",
      });
      if (resp.ok) {
        const profile = await resp.json();
        await dispatch(setProfilo(profile));
      } else {
        alert("Error login");
      }
    } catch (error) {
      console.log(error.message);
      console.log("porco dio");
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
