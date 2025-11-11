import type { Product } from "@/types/Products";
 import { createAsyncThunk } from "@reduxjs/toolkit";
 import baseService from "@/init/baseService";

export const getProductById = createAsyncThunk<Product, number>(
  "product/getProductById", 
  async(productId, thunkAPI) => {
    try{
      const res = await baseService.get(`/products/${productId}`);
      return res.data
    }catch(e:any){
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
)