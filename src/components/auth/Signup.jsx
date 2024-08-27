//remove the below comment before using
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useInput from "../../hooks/useInput";

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
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    try {
      const response = await fetch("/signup", {
        // fetch needs a value
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        navigate(""); // navigate needs a value
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
    <div className="container-fluid mt-5">
      <Form>
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
            Password must be more than 8 characters long, include an uppercase
            letter, a number, and a special character.
          </p>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
