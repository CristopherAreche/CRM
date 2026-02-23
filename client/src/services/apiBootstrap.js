import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

axios.interceptors.request.use(
  (config) => {
    const token = cookies.get("myToken");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
