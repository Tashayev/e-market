//base url
import baseService from "@/features/init/baseService";
//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const searchProductsByTitle = createAsyncThunk(
  "products/searchByTitle",
  async (searchTerm: string, thunkAPI) => {
    return withErrorHandler(
      async () => {
        if (!searchTerm.trim()) {
          return [];
        }
        const response = await baseService.get(
          `/products/?title=${encodeURIComponent(searchTerm)}`
        );
        return response.data;
      },
      thunkAPI,
      "Error searching products by title: "
    );
  }
);
