//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";

export const getProductById = createAsyncThunk(
  "products/getById",
  async (id: number, thunkAPI) => {
    try {
      const response = await baseService.get(`/products/${id}?t=${Date.now()}`);
      
      return response.data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue("Failed to fetch product");
    }
  }
);
