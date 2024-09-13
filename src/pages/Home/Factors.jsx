import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../context/authProvider";
import FactorsRadar from "../../components/charts/Radar";

function Factors() {
  const navigate = useNavigate();
  const { token } = useAuth();
  console.log("Token from useAuth:", token);
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(""); // Add an error state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country && year) {
      setQuery({ country, year });
      setError("");
      console.log({ country, year });
    } else {
      return <p>You must provide a country and a year</p>;
    }
  };

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
          {token && query ? (
            <div>
              <FactorsRadar query={query} token={token} />
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

        <Col xs={12} md={6}>
          <div className="p-3">
            <h1 className="data-intro-header">Factors</h1>
            <p className="fs-2">
              What determines the happiness of a country? Explore factors in
              economics, family, health, freedom, generosity and trust across
              different countries and years.
            </p>
          </div>

          <div className="mt-4">
            <Form onSubmit={handleSubmit}>
              {error && <p className="text-danger">{error}</p>}
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formYear" className="mt-3">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="2020"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                ></Form.Control>
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
