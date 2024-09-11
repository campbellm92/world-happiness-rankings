import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap/";

function Trends() {
  return (
    <Container fluid>
      {/* Top row for introductory text */}
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

      {/* Row with 5 country inputs */}
      <Row className="justify-content-center">
        <Col xs={2}>
          <Form.Group controlId="formCountry1">
            <Form.Control type="text" placeholder="Enter country 1" />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group controlId="formCountry2">
            <Form.Control
              type="text"
              placeholder="Enter country 2 (optional)"
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group controlId="formCountry3">
            <Form.Control
              type="text"
              placeholder="Enter country 3 (optional)"
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Button to submit the form */}
      <Row className="mt-4 text-center">
        <Col xs={12}>
          <Button type="submit" variant="secondary" size="lg">
            Submit
          </Button>
        </Col>
      </Row>

      {/* Bottom row for the AreaChart */}
      <Row>
        <Col xs={12}>{/* <AreaChart query={{}} />  */}</Col>
      </Row>
    </Container>
  );
}

export default Trends;
