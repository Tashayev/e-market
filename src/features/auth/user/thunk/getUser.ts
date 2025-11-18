//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { User } from "@/types/UserTypes";

export const getUser = createAsyncThunk<User>(
  "user/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await baseService.get("/auth/profile");
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
