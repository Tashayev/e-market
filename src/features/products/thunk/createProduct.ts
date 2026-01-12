//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
// types
import type { CreateProduct } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data: CreateProduct, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.post("/products", data);
      return res.data;
},
      thunkAPI,
      "Error creating category: "
    );
    
  }
);
