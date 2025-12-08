import React, {createContext, useState, useEffect} from "react";
import http from "../api/http";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem("access_token"));

  useEffect(() => {
    if (accessToken) {
      sessionStorage.setItem("access_token", accessToken);
    } else {
      sessionStorage.removeItem("access_token");
    }
  }, [accessToken]);

  const login = async (email, password) => {
    const res = await http.post("/auth/login", {email, password});
    const token = res.data.access_token;
    setAccessToken(token);
    setUser(res.data.user);
    return res;
  };

  const logout = async () => {
    await http.post("/auth/logout");
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, accessToken, login, logout, setAccessToken, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};