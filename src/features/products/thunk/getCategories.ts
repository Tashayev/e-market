//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Categories } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getCategories = createAsyncThunk<Categories[]>(
  "product/getCategories",
  async (_, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.get("/categories");
      return res.data;
},
      thunkAPI,
      "Error creating category: "
    );
      
    
  }
);
