//remove the below comment before using
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authProvider";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useInput from "../../hooks/useInput";

const API_KEY = import.meta.env.VITE_API_KEY;

function Signup() {
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
  const navigate = useNavigate();
  // const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;
    const url = `${API_URL}/user/register`;

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
      console.log("Res data:", data);

      if (response.ok) {
        // console.log("Token:", data.token);
        // setToken(data.token);
        navigate("/"); // possible change to dashboard
      } else if (data.message === "User already exists") {
        setError("An account with that email address already exists.");
      } else {
        setError(data.message || "Sign up failed. Please try again.");
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
                src="../../src/assets/images/happy-boy.jpg"
                alt="Happy boy"
                className="img-fluid rounded"
              />
            </span>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-grow-1 mb-4 mb-md-0">
            <Form onSubmit={handleSubmit} className="w-100">
              <Form.Group className="mb-3" controlId="formEmail">
                <h3 className="mb-4 form-header-custom">
                  Register to explore the World Happiness Report further
                </h3>
                <Form.Label className="fs-4">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Please enter your email address"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  required
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
                  placeholder="Please create a password"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  required
                />
              </Form.Group>
              {passwordHasError && (
                <p className="error-text">
                  Password must be more than 8 characters long, include an
                  uppercase letter, a number, and a special character.
                </p>
              )}
              {error && <p className="error-text">{error}</p>}
              <Button
                variant="success"
                size="lg"
                type="submit"
                className="auth-btn-custom"
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Signup;
