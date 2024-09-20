import { useState } from "react";
import useValidateSearch from "../../hooks/useValidateSearch";
import FactorsTable from "../../components/charts/FactorsTable";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import { useAuth } from "../../context/authProvider";

function FactorsMain() {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("2020");
  const [limit, setLimit] = useState("25");
  const [query, setQuery] = useState({
    country: "",
    year: "2020",
    limit: "25",
  });

  const { token } = useAuth();
  const isLoggedIn = token ? true : false;

  const { validateInputs, error } = useValidateSearch(country, year, limit);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setQuery({ country, year, limit });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="m-5 trends-intro text-center">
            <h1 className="data-intro-header">Factors</h1>
            <p className="fs-2">
              What contributes to the happiness of a country? Explore the data
              below.
            </p>
          </div>
        </Col>
      </Row>

      {!isLoggedIn ? (
        <Row>
          <Col xs={12} className="text-center">
            <div className="m-3">
              <h3 className="data-intro-header">
                You need to be logged in to view this data
              </h3>
              <p className="fs-4">
                <a href="/login" className="login-text">
                  Log in
                </a>{" "}
                to access the data.
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <Form onSubmit={handleSubmit} noValidate>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Form.Group controlId="formCountry">
                  <Form.Label className="fs-5">Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Form.Group controlId="formYear">
                  <Form.Label className="fs-5">Year</Form.Label>

                  <Form.Control
                    type="number"
                    placeholder="Year"
                    value={year}
                    min={2015}
                    max={2020}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <Form.Group controlId="formLimit">
                  <Form.Label className="fs-5">Results limit</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Limit"
                    value={limit}
                    min={1}
                    max={160}
                    onChange={(e) => setLimit(e.target.value)}
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
            <Col
              xs={12}
              style={{
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <FactorsTable query={query} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default FactorsMain;
