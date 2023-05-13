import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8001",
  // baseURL: "http://127.0.0.1:5001/project-9f604/us-central1/api",
  baseURL: "https://amazon-old-backend.vercel.app",
  // baseURL: "https://amazon-modern-backend.vercel.app",
});

export default instance;
