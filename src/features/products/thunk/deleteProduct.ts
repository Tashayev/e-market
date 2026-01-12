//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: number, thunkAPI) => {
    return withErrorHandler(
      async () => {
        await baseService.delete(`/products/${productId}`);
        return productId;
      },
      thunkAPI,
      "Error deleting product: "
    );
  }
);
