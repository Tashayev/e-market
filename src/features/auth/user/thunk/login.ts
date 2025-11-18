//base url
import baseService from "@/features/init/baseService";
//redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await baseService.post("/auth/login", data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data || "Login failed");
    }
  }
);
