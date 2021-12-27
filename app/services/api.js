import axios from "axios";
import { BaseUrl } from "../utils/constants";
import { getAccessToken } from "../utils/helpers";

const api = axios.create({
  baseURL: BaseUrl,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
