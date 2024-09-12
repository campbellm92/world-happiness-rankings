import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import TrendChart from "../../components/charts/TrendChart";

function Trends() {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [country3, setCountry3] = useState("");
  const [query, setQuery] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ country1, country2, country3 });
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="m-5 trends-intro text-center">
            <h1 className="trends-intro-header">Trends</h1>
            <p className="fs-2">
              Explore happiness trends with up to 3 different countries.
            </p>
          </div>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={2}>
            <Form.Group controlId="formCountry1">
              <Form.Control
                type="text"
                placeholder="Enter country 1"
                value={country1}
                onChange={(e) => setCountry1(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formCountry2">
              <Form.Control
                type="text"
                placeholder="Enter country 2 (optional)"
                value={country2}
                onChange={(e) => setCountry2(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formCountry3">
              <Form.Control
                type="text"
                placeholder="Enter country 3 (optional)"
                value={country3}
                onChange={(e) => setCountry3(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col xs={12}>
            <Button type="submit" variant="success" size="lg">
              Explore
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col xs={12} style={{ height: "400px", marginTop: "20px" }}>
          <TrendChart query={query} />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Trends;
