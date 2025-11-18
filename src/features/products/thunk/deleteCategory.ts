//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";

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
