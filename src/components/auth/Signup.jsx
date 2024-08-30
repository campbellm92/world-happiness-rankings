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
        setError("An account with this email already exists.");
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
    <Container fluid="lg" className="mt-5">
      <main className="flex-grow-1">
        <Row className="align-items-center">
          {" "}
          <Col md={6}>
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="reg-img-custom"
            />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  required
                />
              </Form.Group>
              {emailHasError && (
                <p className="email-error">Please enter a valid email.</p>
              )}

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  name="password"
                  placeholder="••••••••"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  required
                />
              </Form.Group>
              {passwordHasError && (
                <p className="">
                  Password must be more than 8 characters long, include an
                  uppercase letter, a number, and a special character.
                </p>
              )}
              {error && <p className="">{error}</p>}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Signup;
