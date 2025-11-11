import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

import { getCategories } from "./thunk/getCategories";
import type { ProductState } from "@/types/Products";
import { getProducts } from "./thunk/getProducts";
import { getProductByCategory } from "./thunk/getProductByCategory";
import { getProductById } from "./thunk/getProductById";
import { createCategory } from "./thunk/createCategory";
import { updateCategory } from "./thunk/updateCategory";
import { deleteCategory } from "./thunk/deleteCategory";

const initialState: ProductState = {
  isLoading: false,
  categories: [],
  products: [],
  productById: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductByCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productById = action.payload;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories = [...state.categories, action.payload];
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const updatedCategory = action.payload;

        state.categories = state.categories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        );
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        const id = action.payload;
        state.categories = state.categories.filter((c) => c.id !== id);
      })
      
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
// export const userActions = userSlice.actions;
// export default userSlice.reducer;
