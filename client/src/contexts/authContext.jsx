import React, { createContext, useContext, useState, useEffect } from "react";

// This context will be used to share authentication data across the app.
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("user_data"));

  // Automatically Log In User If Data Exists
  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);
    }
  }, []);
  const login = (newToken, newData) => {
    localStorage.setItem(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData })
    );
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{token, isAuthenticated, login, logout, userData}}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a Custom Hook for Easy Access
export const useAuth = () => useContext(AuthContext);
