// remove below comment before using
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
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
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }

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
        console.log(data.token);
        setToken(data.token);
        navigate("");
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
    <div className="#">
      <div className="#">
        <h3 className="#">Log in</h3>
        <form className="#" action="#" onSubmit={handleSubmit}>
          <div className="#">
            <label htmlFor="email">Email:</label>
            <input
              className="#"
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="email@email.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
            />
            {emailHasError && (
              <p className="error-text">Please enter a valid email.</p>
            )}
          </div>
          <div className="#">
            <label htmlFor="password">Password:</label>
            <input
              className="#"
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
            <p className="error-text">
              The password you have entered is incorrect. Please try again.
            </p>
          )}
          {error && <p className="">{error}</p>}
          <button
            className="#"
            type="submit"
            disabled={!emailIsValid || !passwordIsValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
