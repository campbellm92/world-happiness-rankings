import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap/";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid className="">
          <Navbar.Brand href="#home" className="ms-0">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
