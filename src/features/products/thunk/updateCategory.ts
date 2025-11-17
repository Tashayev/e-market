import baseService from "@/features/init/baseService";
import type { UpdateCategory } from "@/types/Products";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCategory = createAsyncThunk(
  'product/updateCategory',
  async(data: UpdateCategory, thunkAPI) => {
    try{
      const res = await baseService.put(`/categories/${data.id}`, data);
      return res.data
    }catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);

    }
  }
)