import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";
import type { CreateCategory } from "@/types/Products";

export const createCategory = createAsyncThunk(
  "product/createCategory", 
  async(data: CreateCategory, thunkAPI ) => {
    try {
      const response = await baseService.post(`categories/`, data);
      return response.data
    }catch (e: any) {      
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
)




