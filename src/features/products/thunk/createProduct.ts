import baseService from "@/features/init/baseService";
import type { CreateProduct } from "@/types/Products";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async(data: CreateProduct, thunkAPI)=>{
    try{
      const res = await baseService.post('/products', data);
      return res.data
    }catch(e: any){
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }

  }
)