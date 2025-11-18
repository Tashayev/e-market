//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Product } from "@/types/Products";

export const getProducts = createAsyncThunk<Product[]>(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await baseService.get("/products");

      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
