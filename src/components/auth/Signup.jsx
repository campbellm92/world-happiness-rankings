/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useInput from "../../hooks/useInput";
import image from "../../assets/images/happy-boy.jpg";

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
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      setError("You must enter a valid email address and password.");
      setSuccess(null);
      return;
    }

    setError(null);
    setSuccess(null);

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

      if (response.ok) {
        setSuccess(
          "You've successfully created an account. You can now log in."
        );
        setError(null);
        emailReset();
        passwordReset();
      } else if (data.message === "User already exists") {
        setError("An account with that email address already exists.");
        setSuccess(null);
      } else {
        setError(data.message || "Sign up failed. Please try again.");
        setSuccess(null);
      }
    } catch (error) {
      setError("Request failed. Please try again.");
      setSuccess(null);
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
              <img src={image} alt="Happy boy" className="img-fluid rounded" />
            </span>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-grow-1 mb-4 mb-md-0">
            <Form onSubmit={handleSubmit} className="w-100" noValidate>
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
                />
              </Form.Group>
              {passwordHasError && (
                <p className="error-text">
                  Password must be more than 8 characters long, include an
                  uppercase letter, a number, and a special character.
                </p>
              )}
              {success && <p className="success-text">{success}</p>}
              {error && <p className="error-text">{error}</p>}
              <Button size="lg" type="submit" className="auth-btn-custom">
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
