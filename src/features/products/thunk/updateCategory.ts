//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateCategory } from "@/types/Products";

export const updateCategory = createAsyncThunk(
  "product/updateCategory",
  async (data: UpdateCategory, thunkAPI) => {
    try {
      const res = await baseService.put(`/categories/${data.id}`, data);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
