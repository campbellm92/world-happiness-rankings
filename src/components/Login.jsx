import { useInput } from "../hooks/useInput";

export default function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
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
            <p className="error-text">Please enter a valid password.</p>
          )}
          <button
            className="#"
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
