//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateUser } from "@/types/UserTypes";
//toast
import { toast } from "react-toastify";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: UpdateUser, thunkAPI) => {
    try {
      const response = await baseService.put(`/users/${data.id}`, data);
      return response.data;
    } catch (e: any) {
      toast.error("Registration error: " + e.response?.data || e.message);
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
