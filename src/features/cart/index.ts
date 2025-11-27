//redux
import { createSlice } from "@reduxjs/toolkit";
//reducers
import * as reducers from "./reducers";
//extraReducers
import { extraReducers } from "./extraReducer";
//types
import type { CartState } from "@/types/CartTyps";

const initialState: CartState = {
  items: [],
  isLoading: false,
  cartProducts: [],
  totalPrice: 0,
  totalItems: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
  extraReducers
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
