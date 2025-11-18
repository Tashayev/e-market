//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { AvailabelUser } from "@/types/UserTypes";

export const checkUserEmail = createAsyncThunk<boolean, AvailabelUser>(
  "user/checkUserEmail",
  async (data, thunkAPI) => {
    try {
      const response = await baseService.get("/users");
      const users = response.data;
      const exists = users.some((user: any) => user.email === data.email);
      return exists;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
