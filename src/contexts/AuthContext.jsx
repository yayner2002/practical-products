/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// create a context called AuthContext here by calling the createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // add the object to the value prop which contains user, login,and logout
    <AuthContext.Provider value={}> 
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
