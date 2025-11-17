import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";

export const postRefreshToken = createAsyncThunk(
  "user/postRefreshToken",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const { data } = await baseService.post("/auth/refresh-token", { refreshToken });
      
      return data;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
