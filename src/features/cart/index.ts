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
loaded:false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
  extraReducers
});
export const cartInitialState = initialState
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
