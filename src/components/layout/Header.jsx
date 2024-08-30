import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap/";
import logo from "../../assets/images/logo2.svg";

function Header() {
  return (
    <>
      <Navbar bg="background" data-bs-theme="dark" expand="md">
        <Container fluid>
          <div className="d-flex justify-content-between flex-wrap">
            <Navbar.Brand as={NavLink} to="/" className="ms-3">
              {/* <Navbar.Text className="text-wrap brand-custom">
                World Happiness Rankings
              </Navbar.Text> */}
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/signup"
                className="nav mx-2 text-accent nav-link-custom"
              >
                SIGN UP
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/login"
                className="nav mx-2 text-accent nav-link-custom"
              >
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
