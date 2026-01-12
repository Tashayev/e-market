//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateProduct } from "@/types/Products";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data: UpdateProduct, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.put(`/products/${data.id}`, data);
        return res.data;
      },
      thunkAPI,
      "Error updating product: "
    );
  }
);
