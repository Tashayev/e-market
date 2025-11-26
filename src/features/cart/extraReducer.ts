import { isAnyOf, type ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getProducts } from "./thunk/getCartProduct";
import type { CartState } from "@/types/CartTyps";

export const extraReducers = (builder: ActionReducerMapBuilder<CartState>) => {
  builder.addMatcher(isAnyOf(getProducts.pending), (state) => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(getProducts.fulfilled), (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
  });

  builder.addMatcher(isAnyOf(getProducts.rejected), (state) => {
    state.isLoading = false;
  });
};
