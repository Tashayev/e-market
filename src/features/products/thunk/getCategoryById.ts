//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";

export const getCategoryById = createAsyncThunk(
  'product/getCategoryById',
  async(categoryId:number, thunkAPI) =>{
    try{
      const res = await baseService.get(`/categories/${categoryId}`);
      return res.data;
    }catch(e:any){
      return thunkAPI.rejectWithValue(e.response?.data)
    }
  }
)