import type { Product } from "@/types/Products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";

export const getProductByCategory = createAsyncThunk<Product[], number>(
  "product/getProductByCategory",
  async (categoryId, thunkAPI) => {
    try {
      const res = await baseService.get(`/categories/${categoryId}/products`);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
