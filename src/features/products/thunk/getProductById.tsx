//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getProductById = createAsyncThunk(
  "products/getById",
  async (id: number, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const response = await baseService.get(
          `/products/${id}?t=${Date.now()}`
        );

        return response.data;
      },
      thunkAPI,
      "Error fetching product by ID: "
    );
  }
);
