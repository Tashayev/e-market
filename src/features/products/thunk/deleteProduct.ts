import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: number, thunkAPI) => {
    try {
      await baseService.delete(`/products/${productId}`);
      return productId; 
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
