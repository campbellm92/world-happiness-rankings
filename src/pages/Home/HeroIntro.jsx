import { Row, Col, Button, Card, Container } from "react-bootstrap";

function HeroIntro() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="hero-card flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="hero-card-title">Rankings</Card.Title>
              <Card.Text className="flex-grow-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quidem temporibus qui iure dicta harum cum nam, delectus
                provident necessitatibus officiis molestias, molestiae
                voluptatum nostrum ratione adipisci tempore reprehenderit rem.
              </Card.Text>
              <Button className="hero-card-btn mt-auto">Find out more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="hero-card flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="hero-card-title">Trends</Card.Title>
              <Card.Text className="flex-grow-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quidem temporibus qui iure dicta harum cum nam, delectus
                provident necessitatibus officiis molestias, molestiae
                voluptatum nostrum ratione adipisci tempore reprehenderit rem.
              </Card.Text>
              <Button className="hero-card-btn mt-auto">Find out more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="hero-card flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="hero-card-title">Factors</Card.Title>
              <Card.Text className="flex-grow-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quidem temporibus qui iure dicta harum cum nam, delectus
                provident necessitatibus officiis molestias, molestiae
                voluptatum nostrum ratione adipisci tempore reprehenderit rem.
              </Card.Text>
              <Button className="hero-card-btn mt-auto">Find out more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroIntro;
