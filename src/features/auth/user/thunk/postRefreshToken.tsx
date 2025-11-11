
import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/init/baseService";
import { save } from "@/utils/storage";


const ACCESS_TOKEN_KEY = 'accessToken';
export const postRefreshToken = createAsyncThunk(
  "user/postRefreshToken",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const { data } = await baseService.post("/auth/refresh-token", { refreshToken });
      const newAccessToken = data.access_token;
      console.log("post",newAccessToken)
      save(ACCESS_TOKEN_KEY, newAccessToken);
      baseService.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
