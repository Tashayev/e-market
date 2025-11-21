//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { RegisterForm } from "@/types/AuthTypes";
//toast
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
