import type { CartState } from "@/types/CartTyps";

import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
