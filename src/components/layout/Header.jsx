import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap/";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="ms-3 brand-custom">
            World Happiness Rankings
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/signup" className="nav-link-custom">
              Sign up
            </Nav.Link>
            <Nav.Link href="/login" className="nav-link-custom">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
