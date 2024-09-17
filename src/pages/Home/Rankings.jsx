import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import Table from "../../components/charts/Table";

function Rankings() {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("2020");
  const [query, setQuery] = useState({ country: "", year: "2020" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ country, year });
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="pt-5 ps-4 pe-4 rankings-section-one-intro">
              <h1 className="data-intro-header">Finland leads again</h1>
              <p className="fs-5">
                In 2020, Finland was the happiest country in the world for the
                third year running. Find out here how your country has done in
                comparison with others over the years.
              </p>
            </div>
            <Form className="pb-5 ps-4 pe-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formYear">
                <Form.Label className="fs-5">Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter a year between 2015 and 2020"
                  value={year}
                  min="2015"
                  max="2020"
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label className="fs-5">Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
              <Button size="lg" type="submit" className="explore-btn">
                Explore
              </Button>
            </Form>
          </Col>

          <Col
            xs={12}
            md={6}
            className="p-4"
            style={{ paddingBottom: "20px", overflow: "auto" }}
          >
            <Table query={query} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rankings;
