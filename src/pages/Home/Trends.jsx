import { useState } from "react";
import useValidateSearch from "../../hooks/useValidateSearch";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import TrendChart from "../../components/charts/TrendChart";

function Trends() {
  const [country, setCountry] = useState("Finland");
  const [query, setQuery] = useState({ country: "Finland" });

  const { validateInputs, error } = useValidateSearch(country);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country.trim()) {
      setQuery({ country: "" });
    }

    if (validateInputs()) {
      setQuery({ country });
    }
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
          <Col xs={12} sm={6} md={4} lg={3}>
            <Form.Group controlId="formCountry1">
              <Form.Label className="fs-5">Country</Form.Label>

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

      {error && <p className="mt-4 fs-5 text-center error-text">{error}</p>}

      <Row>
        <Col xs={12} style={{ marginTop: "20px" }}>
          <TrendChart query={query} />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Trends;
