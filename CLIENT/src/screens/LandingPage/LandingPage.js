import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Note App</h1>
            <p className="subtitle">One Safe Place for all your notes.</p>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className="landingButton">
                Login
              </Button>
            </a>
            <a href="/signup">
              <Button
                variant="outline-primary"
                size="lg"
                className="landingButton"
              >
                Signup
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
