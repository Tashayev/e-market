//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { CreateCategory } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const createCategory = createAsyncThunk(
  "product/createCategory",
  async (data: CreateCategory, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const response = await baseService.post(`categories/`, data);
        return response.data;
      },
      thunkAPI,
      "Error creating category: "
    );
  }
);
