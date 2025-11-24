//redux
import { createSlice } from "@reduxjs/toolkit";
//types
import type { ProductState } from "@/types/Products";
//reducers
import { extraReducers } from "./extraReducer";
import * as reducers from "./reducers";

const initialState: ProductState = {
  isLoading: false,
  categories: [],
  products: [],
  productById: null,
  searchResults: [],
  error: null,
  setError: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers,
  extraReducers,
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
