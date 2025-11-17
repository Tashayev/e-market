import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/features/init/baseService";
import type { Categories } from "@/types/Products";

export const getCategories = createAsyncThunk<Categories[]>(
  "product/getCategories",
  async (_, thunkAPI) => {
    try{
      const res = await baseService.get('/categories');
      return res.data;
    }catch(e:any){
      return thunkAPI.rejectWithValue(e.response?.data)
    }
  }
)






