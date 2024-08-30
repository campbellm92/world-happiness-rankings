import { Button, Carousel, Container } from "react-bootstrap";

function HeroCarousel() {
  return (
    <Container className="mt-3 mt-md-4 mt-lg-5">
      <Carousel>
        <Carousel.Item className="carousel-item-custom one">
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Which are the happiest countries in the world?</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="carousel-button-custom one">
              Find out more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-custom two">
          <Carousel.Caption className="carousel-caption-custom">
            <h3>What makes a country happy?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className="carousel-button-custom two">
              Find out more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-custom three">
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className="carousel-button-custom three">
              Find out more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HeroCarousel;
