
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Categories, Product, ProductState, SetLoadingPayload } from "@/types/Products";

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

export const setLoading = (state: ProductState, action: PayloadAction<SetLoadingPayload>) => {
  state.isLoading = action.payload.isLoading;
};

export const setSearchResults = (state: ProductState, action: PayloadAction<Product[]>) => {
  state.searchResults = action.payload;
  state.isLoading = false;
  state.error = null;
};

export const setSearchError = (state: ProductState, action: PayloadAction<string>) => {
  state.error = action.payload;
  state.isLoading = false;
  state.searchResults = [];
};