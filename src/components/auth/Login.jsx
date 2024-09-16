// remove below comment before using
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useInput from "../../hooks/useInput";

const API_KEY = import.meta.env.VITE_API_KEY;

function Login() {
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputReset: emailReset,
  } = useInput("email");

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    inputReset: passwordReset,
  } = useInput("password");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      setError(
        "The email address or password you've entered are invalid. Please try again."
      );
      return;
    }

    setError(null);
    setSuccess(null);

    const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;
    const url = `${API_URL}/user/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setSuccess("You've successfully logged in. Redirecting to home...");
        setError(null);
        emailReset();
        passwordReset();

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("Request failed. Please try again.");
    }
    emailReset();
    passwordReset();
  };

  return (
    <Container
      fluid="lg"
      className="mt-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "75vh" }}
    >
      <main className="w-100">
        <Row className="align-items-center">
          {" "}
          <Col xs={12} md={6} className="d-flex flex-grow-1 mb-4 mb-md-0">
            <span className="border rounded">
              <img
                src="../../src/assets/images/happy-people.jpg"
                alt="Happy people"
                className="img-fluid rounded auth-img-custom"
              />
            </span>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-grow-1 mb-4 mb-md-0">
            <Form onSubmit={handleSubmit} className="w-100" noValidate>
              <Form.Group className="mb-3" controlId="formEmail">
                <h3 className="mb-4 form-header-custom">Log in</h3>
                <Form.Label className="fs-4">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Please enter your email address"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
              </Form.Group>
              {emailHasError && (
                <p className="error-text">
                  Please enter a valid email address.
                </p>
              )}

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="fs-4">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Please enter your password"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
              </Form.Group>
              {passwordHasError && (
                <p className="error-text">
                  The password you have entered is incorrect. Please try again.
                </p>
              )}
              {success && <p className="success-text">{success}</p>}
              {error && <p className="error-text">{error}</p>}
              <Button size="lg" type="submit" className="auth-btn-custom">
                Log in
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Login;
