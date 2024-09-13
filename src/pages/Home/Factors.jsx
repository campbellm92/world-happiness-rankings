import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchWithAuth from "../../utils/fetchWithAuth";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Factors() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  });

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container fluid className="p-5">
      <Row>
        <Col xs={12} md={6}>
          {isAuthenticated ? (
            <div>
              <h3 className="text-center">Chart Placeholder</h3>
            </div>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <Card className="factors-auth-card">
                <Card.Img
                  variant="top"
                  src="../../src/assets/images/happy-girl.jpg"
                  className="factors-auth-img"
                />
                <Card.Body>
                  <Card.Title className="data-intro-header">
                    Please sign in
                  </Card.Title>
                  <Card.Text>
                    You'll need to have an account to explore this data. Please
                    select sign up below, or log in if you have an account
                    already.
                  </Card.Text>
                  <div className="factors-auth-btns">
                    <Button
                      className="me-2 factors-signup-btn"
                      onClick={handleSignupClick}
                    >
                      Sign up
                    </Button>
                    <Button
                      className="me-2 factors-login-btn"
                      onClick={handleLoginClick}
                    >
                      Log in
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )}
        </Col>

        {/* Right: Introductory Text and Form (50% width) */}
        <Col xs={12} md={6}>
          {/* Introductory Text */}
          <div className="p-3">
            <h1 className="data-intro-header">Factors</h1>
            <p className="fs-2">
              What determines the happiness of a country? Explore factors in
              economics, family, health, freedom, generosity and trust across
              different countries and years.
            </p>
          </div>

          {/* Form Section */}
          <div className="mt-4">
            <Form>
              <Form.Group controlId="formCountry">
                <Form.Label>Select a Country</Form.Label>
                <Form.Control as="select"></Form.Control>
              </Form.Group>

              <Form.Group controlId="formYear" className="mt-3">
                <Form.Label>Select a Year</Form.Label>
                <Form.Control as="select"></Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Factors;
