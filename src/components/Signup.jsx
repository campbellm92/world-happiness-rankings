// to be used in conjunction w/ useInput hook

export default function Signup() {
  return (
    <div className="#">
      <div className="#">
        <h3 className="#">Sign up</h3>
        <form className="#" action="#">
          <div className="#">
            <label htmlFor="email">Email:</label>
            <input
              className="#"
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              required
            />
          </div>
          <div className="#">
            <label htmlFor="username">Username:</label>
            <input
              className="#"
              type="text"
              name="username"
              id="username"
              placeholder="LimpHampster"
              required
            />
          </div>
          <div className="#">
            <label htmlFor="password">Password:</label>
            <input
              className="#"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          <button className="#" type="submit">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
