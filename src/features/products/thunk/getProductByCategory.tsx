//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { Product } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getProductByCategory = createAsyncThunk<Product[], number>(
  "product/getProductByCategory",
  async (categoryId, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.get(`/categories/${categoryId}/products`);
        return res.data;
      },
      thunkAPI,
      "Error fetching products by category: "
    );
  }
);
