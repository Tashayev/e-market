import baseService from "@/features/init/baseService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchProductsByTitle = createAsyncThunk(
  "products/searchByTitle",
  async (searchTerm: string, thunkAPI) => {
    try {
      const response = baseService.get(`/products-filter?title=${encodeURIComponent(searchTerm)}`);
      return response.then((res) => res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to search products by title");
    }
  }
);
