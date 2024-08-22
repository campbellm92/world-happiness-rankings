import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    setToken_(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
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
