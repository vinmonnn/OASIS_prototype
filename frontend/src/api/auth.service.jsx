// frontend/src/api/auth.service.jsx
import api from "./axios";
import { setToken, clearToken } from "./token";

// Debug/Connectivity
export async function health() {
  const res = await api.get("/api/health");
  return res.data;
}

// OTP
export async function sendOtp(email) {
  const res = await api.post("/api/auth/student/send-otp", { email });
  return res.data;
}

export async function verifyOtp(email, otp) {
  const res = await api.post("/api/auth/student/verify-otp", { email, otp });
  return res.data;
}

// Student
export async function registerStudent(email, password) {
  const res = await api.post("/api/auth/student/register", { email, password });
  if (res.data?.token) setToken(res.data.token);
  return res.data;
}

export async function loginStudent(email, password) {
  const res = await api.post("/api/auth/student/login", { email, password });
  if (res.data?.token) setToken(res.data.token);
  return res.data;
}

// Admin
export async function loginAdmin(email, password) {
  const res = await api.post("/api/auth/admin/login", { email, password });
  if (res.data?.token) setToken(res.data.token);
  return res.data;
}

export function logoutLocal() {
  clearToken();
}

// Session
export async function me() {
  const res = await api.get("/api/auth/me");
  return res.data;
}
