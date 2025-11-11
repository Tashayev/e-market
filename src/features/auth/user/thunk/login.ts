import baseService from "@/init/baseService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await baseService.post("/auth/login", data);
      const token = response.data.access_token;
      localStorage.setItem("accessToken", token);
      baseService.defaults.headers.common.Authorization = `Bearer ${token}`;
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data || "Login failed");
    }
  }
);
