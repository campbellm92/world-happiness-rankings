import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import RankingsAreaChart from "../../components/charts/AreaChart";

function Rankings() {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [query, setQuery] = useState({ country: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ country, year });
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <div className="p-5 rankings-section-one-intro">
                  <h1 className="rankings-section-one-header">
                    Finland leads again.
                  </h1>
                  <p className="fs-2 rankings-section-one-text">
                    In 2020, Finland was the happiest country in the world for
                    the third year running. Find out here how your country has
                    done over the years.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {" "}
                <Form className="px-5" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label className="fs-4">Year</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter a year between 2015 and 2020"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label className="fs-4">Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="success" size="lg" type="submit">
                    Explore
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>

          <Col xs={6}>
            <RankingsAreaChart query={query} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rankings;
