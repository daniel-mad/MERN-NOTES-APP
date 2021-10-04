import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswored] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <MainScreen title="LOGIN">
      {loading && <Loading size={50} />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPasswored(e.target.value)}
          />
        </Form.Group>

        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Row className="my-3 danger">
        <Col className="py-3">
          New Customer? <Link to="/register">Register Here</Link>
        </Col>
      </Row>
    </MainScreen>
  );
};

export default LoginPage;
