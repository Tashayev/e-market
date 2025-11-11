import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/init/baseService";

export const deleteCategory = createAsyncThunk(
  "product/deleteCategory",
  async (categoryId: number, thunkAPI) => {
    try {
      await baseService.delete(`/categories/${categoryId}`);
      return categoryId; 
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
