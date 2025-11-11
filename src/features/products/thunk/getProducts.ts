import baseService from "@/init/baseService";
import type { Product } from "@/types/Products";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
