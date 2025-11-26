import type { PayloadAction } from "@reduxjs/toolkit";
import type { Categories, Product, ProductState } from "@/types/Products";

export const setCategories = (
  state: ProductState,
  action: PayloadAction<Categories[]>
) => {
  state.categories = action.payload;
};

export const clearSearchResults = (state: ProductState) => {
  state.searchResults = [];
  state.error = null;
};

export const addProductIfMissing = (
  state: ProductState,
  action: PayloadAction<Product>
) => {
  const exists = state.products.some((p) => p.id === action.payload.id);
  if (!exists) state.products.push(action.payload);
};
