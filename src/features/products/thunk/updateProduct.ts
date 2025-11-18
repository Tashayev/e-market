//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateProduct } from "@/types/Products";

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data: UpdateProduct, thunkAPI) => {
    try {
      const res = await baseService.put(`/products/${data.id}`, data);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
