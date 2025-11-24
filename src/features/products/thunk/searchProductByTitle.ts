import baseService from "@/features/init/baseService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchProductsByTitle = createAsyncThunk(
  "products/searchByTitle",
  async (searchTerm: string, thunkAPI) => {
    try {
      if (!searchTerm.trim()) {
        return [];
      }
      const response = await baseService.get(
        `/products/?title=${encodeURIComponent(searchTerm)}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to search products by title");
    }
  }
);
