import type { CartState } from "@/types/CartTyps";
import { load, save } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  //persist
  items: load('cart') ? JSON.parse(load('cart')!) : []
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
      save('cart', state.items)
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      save('cart', state.items)
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
