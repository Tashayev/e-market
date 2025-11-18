import { createSlice } from "@reduxjs/toolkit";

import type { ProductState } from "@/types/Products";
import { extraReducers } from "./thunk/extraReducer";
import * as reducers from "./reducers";
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
  extraReducers
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
