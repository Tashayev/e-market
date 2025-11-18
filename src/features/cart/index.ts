import type { CartState } from "@/types/CartTyps";
import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

const initialState: CartState = {
  items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;