//redux
import { isAnyOf, type ActionReducerMapBuilder } from "@reduxjs/toolkit";
//types
import type { CartState } from "@/types/CartTyps";
//thunks
import { getProducts } from "../products/thunk/getProducts";

export const extraReducers = (builder: ActionReducerMapBuilder<CartState>) => {
  builder.addMatcher(isAnyOf(getProducts.pending), (state) => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(getProducts.fulfilled), (state) => {
    state.isLoading = false;
    state.loaded = true;
  });

  builder.addMatcher(isAnyOf(getProducts.rejected), (state) => {
    state.isLoading = false;
  });
};
