import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import TrendChart from "../../components/charts/TrendChart";

function Trends() {
  const [country, setCountry] = useState("Finland");
  const [query, setQuery] = useState({ country: "Finland" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ country });
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="m-5 trends-intro text-center">
            <h1 className="data-intro-header">Trends</h1>
            <p className="fs-2">Explore happiness trends in your country.</p>
          </div>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={2}>
            <Form.Group controlId="formCountry1">
              <Form.Control
                type="text"
                placeholder="Enter a country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col xs={12}>
            <Button type="submit" size="lg" className="explore-btn">
              Explore
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col xs={12} style={{ marginTop: "20px" }}>
          <TrendChart query={query} />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Trends;
