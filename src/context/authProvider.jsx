import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setTokenState] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setToken(null);
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      logout,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
