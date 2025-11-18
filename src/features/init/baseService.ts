//axios
import axios from "axios";
//toast
import { toast } from "react-toastify";
//redux store
import { postRefreshToken } from "@/features/auth/user/thunk/postRefreshToken";
import { store } from "@/features/store/store";

const baseService = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const AUTH_HEADER = "Authorization";

baseService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers.set?.(AUTH_HEADER, `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export const saveTokens = async (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};
export const setAuthHeader = (accessToken: string) => {
  baseService.defaults.headers.common[AUTH_HEADER] = `Bearer ${accessToken}`;
};

baseService.interceptors.response.use(
  async (response) => {
    const newAccessToken = response.data?.access_token;
    const newRefreshToken = response.data?.refresh_token;

    if (newAccessToken) {
      saveTokens(newAccessToken);
      setAuthHeader(newAccessToken);
    }
    if (newRefreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
    }
    return response;
  },

  async (error) => {
    const status = error.response?.status;
    if (status === 401) {
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (refreshToken) {
          store.dispatch(postRefreshToken(refreshToken));
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        delete baseService.defaults.headers.common[AUTH_HEADER];
      }
    }
    if (status === 426) {
      toast.error("Please update your application to continue.");
    }
    return Promise.reject(error);
  }
);
export default baseService;
