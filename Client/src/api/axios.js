import axios from "axios";

const DEFAULT_API_BASE_URL = "http://127.0.0.1:5002/api";

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
