import axios from "axios";
import { getApiConfig } from "@/config/api.config";

const apiConfig = getApiConfig();

const instance = axios.create({
  baseURL: apiConfig.apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    const customError = {
      status: response?.status || null,
      message: response?.data?.message,
    };

    return Promise.reject(customError);
  },
);

export default instance;
