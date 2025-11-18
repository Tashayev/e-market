//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Product } from "@/types/Products";

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
