//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateCategory } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const updateCategory = createAsyncThunk(
  "product/updateCategory",
  async (data: UpdateCategory, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.put(`/categories/${data.id}`, data);
        return res.data;
      },
      thunkAPI,
      "Error updating category: "
    );
  }
);
