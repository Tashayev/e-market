//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Product } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getProducts = createAsyncThunk<Product[]>(
  "product/getProducts",
  async (_, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.get("/products");
        return res.data;
      },
      thunkAPI,
      "Error fetching products: "
    );
  }
);
