import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";
import FactorsTable from "../../components/charts/FactorsTable";
import { useNavigate } from "react-router-dom";

function FactorsMain() {
  const [country, setCountry] = useState("Finland");
  const [year, setYear] = useState("2020");
  const [limit, setLimit] = useState("1");
  const [query, setQuery] = useState({
    country: "Finland",
    year: "2020",
    limit: "1",
  });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ country, year, limit });
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
            <div className="m-5">
              <h1 className="trends-intro-header">
                You need to be logged in to view this data
              </h1>
              <p>
                <a href="/login">Log in</a> to access the data.
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
              <Col xs={2}>
                <Form.Group controlId="formCountry">
                  <Form.Control
                    type="text"
                    placeholder="Enter a country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col xs={2}>
                <Form.Group controlId="formYear">
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

              <Col xs={2}>
                <Form.Group controlId="formLimit">
                  <Form.Control
                    type="number"
                    placeholder="Limit"
                    value={limit}
                    min={1}
                    max={100}
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
