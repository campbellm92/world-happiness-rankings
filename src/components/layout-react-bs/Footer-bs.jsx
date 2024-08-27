import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-bg-light mt-auto p-5">
      <Row>
        <Col md={3}>
          <p>Menu</p>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <p>Menu</p>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <p>&copy; 2022, Your site</p>
          <p className="fw-light">Info</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
