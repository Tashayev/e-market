import { postRefreshToken } from "@/features/auth/user/thunk/postRefreshToken";
import { store } from "@/store/store";
import { save, remove, load } from "@/utils/storage";
import axios from "axios";

const baseService = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"  
});

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const AUTH_HEADER = "Authorization";

baseService.interceptors.request.use(
  async (config) => {
    const token = load(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
baseService.interceptors.response.use(
  async (response) => {
    const newAccessToken = response.data?.[ACCESS_TOKEN_KEY];
    if (newAccessToken) {
      await save(ACCESS_TOKEN_KEY, newAccessToken);
      baseService.defaults.headers.common[
        AUTH_HEADER
      ] = `Bearer ${newAccessToken}`;
    }
    return response;
  },
  async (err) => {
    const status = err.response?.status;
    if (status === 401) {
      try {
        const refreshToken = load(REFRESH_TOKEN_KEY);
        if (refreshToken) {
          store.dispatch(postRefreshToken(refreshToken));
        }
      } catch (error) {
        remove(ACCESS_TOKEN_KEY);
        remove(REFRESH_TOKEN_KEY);
        delete baseService.defaults.headers.common[AUTH_HEADER];
      }
    }
    if (status === 426) {
      alert("Please update your application to continue.");
    }
    return Promise.reject(err);
  }
);
export default baseService;
