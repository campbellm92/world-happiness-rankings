import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Toast,
  ToastContainer,
} from "react-bootstrap/";
import logo from "../../assets/images/logo.svg";
import { useAuth } from "../../context/authProvider";

function Header() {
  const { token, logout } = useAuth();
  const [loggedOutToast, setLoggedOutToast] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    setLoggedOutToast(true);
    navigate("/");
  };

  return (
    <>
      <Navbar bg="background" data-bs-theme="dark" expand="md">
        <Container fluid>
          <div className="d-flex justify-content-between flex-wrap">
            <Navbar.Brand as={NavLink} to="/" className="ms-3">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {!isLoggedIn && (
                <>
                  <Nav.Link
                    as={NavLink}
                    to="/signup"
                    className="nav mx-2 nav-link-custom"
                  >
                    SIGN UP
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    className="nav mx-2 nav-link-custom"
                  >
                    LOGIN
                  </Nav.Link>
                </>
              )}
              {isLoggedIn && (
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="nav mx-2 nav-link-custom"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setLoggedOutToast(false)}
          show={loggedOutToast}
          delay={3000}
          autohide
        >
          <Toast.Header className="toast-header">
            <strong className="me-auto">Successful logout</strong>
          </Toast.Header>
          <Toast.Body className="toast-body">Thanks for visiting.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default Header;
