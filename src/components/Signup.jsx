//remove the below comment before using
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";
import { useInput } from "../hooks/useInput";

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
      const response = await fetch("", {
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
    <div className="">
      <div className="">
        <h3 className="">Sign up</h3>
        <form className="" action="" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              className=""
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
            />
            {emailHasError && <p className="">Please enter a valid email.</p>}
          </div>
          <div className="">
            <label htmlFor="password">Password:</label>
            <input
              className=""
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="••••••••"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
          </div>
          {passwordHasError && (
            <p className="">
              Password must be more than 8 characters long, include an uppercase
              letter, a number, and a special character.
            </p>
          )}
          {error && <p className="">{error}</p>}
          <button
            className=""
            type="submit"
            disabled={!emailIsValid || !passwordIsValid}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
