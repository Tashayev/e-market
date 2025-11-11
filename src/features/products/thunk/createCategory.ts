import { createAsyncThunk } from "@reduxjs/toolkit";
import baseService from "@/init/baseService";
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



// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (data: RegisterForm, thunkAPI) => {
//     try {
//       const response = await baseService.post("/users/", data); 
//       return response.data;
//     } catch (e: any) {
//       console.error("Registration error:", e.response?.data || e.message);
//       return thunkAPI.rejectWithValue(e.response?.data || e.message);
//     }
//   }
// );
