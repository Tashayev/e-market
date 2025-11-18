//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Product } from "@/types/Products";

export const getProductById = createAsyncThunk<Product, number>(
  "product/getProductById",
  async (productId, thunkAPI) => {
    try {
      const res = await baseService.get(`/products/${productId}`);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
