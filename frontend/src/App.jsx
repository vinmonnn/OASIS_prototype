import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HTEList from "./pages/HTEList";
import { AuthProvider } from "./contexts/AuthContext";
import ChatWidget from "./components/ChatWidget";

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/htes" element={<HTEList />} />
        </Routes>
      </BrowserRouter>
      <ChatWidget />
    </AuthProvider>
  );
}