//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getCategoryById = createAsyncThunk(
  "product/getCategoryById",
  async (categoryId: number, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.get(`/categories/${categoryId}`);
        return res.data;
      },
      thunkAPI,
      "Error creating category: "
    );
  }
);
