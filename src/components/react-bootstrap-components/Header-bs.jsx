import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid className="">
          <Navbar.Brand href="#home" className="ms-0">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Link</Nav.Link>
            <Nav.Link href="#features">Link</Nav.Link>
            <Nav.Link href="#pricing">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
