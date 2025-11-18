//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Categories } from "@/types/Products";

export const getCategories = createAsyncThunk<Categories[]>(
  "product/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await baseService.get("/categories");
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
