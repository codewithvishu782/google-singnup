import axios from "axios";

const DEFAULT_API_BASE_URL = "https://google-signup.onrender.com/api";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL,
});

// JWT token automatically attach karega
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
