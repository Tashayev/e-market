import baseService from "@/features/init/baseService";
import type { UpdateProduct } from "@/types/Products";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async(data: UpdateProduct, thunkAPI) => {
    try{
      const res = await baseService.put(`/products/${data.id}`, data);
      return res.data
    }catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);

    }
  }
)