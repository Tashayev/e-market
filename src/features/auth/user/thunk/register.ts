import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";
import type { RegisterForm } from "@/types/UserTypes";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data: RegisterForm, thunkAPI) => {
    try {
      const response = await baseService.post("/users/", data); 
      return response.data;
    } catch (e: any) {
      toast.error("Registration error: " + e.response?.data || e.message);
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
