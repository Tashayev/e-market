//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const deleteCategory = createAsyncThunk(
  "product/deleteCategory",
  async (categoryId: number, thunkAPI) => {
    return withErrorHandler(
      async () => {
        await baseService.delete(`/categories/${categoryId}`);
        return categoryId;
      },
      thunkAPI,
      "Error deleting category: "
    );
  }
);
