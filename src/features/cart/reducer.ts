import type { CartState, CartTypes } from "@/types/CartTyps";
import type { PayloadAction } from "@reduxjs/toolkit";



export const setCategories = (state: CartState, action: PayloadAction<CartTypes[]>) => {
  state.items = action.payload
}