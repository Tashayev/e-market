//types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartTypes } from "@/types/CartTyps";



export const addToCart = (state: CartState, action: PayloadAction<CartTypes>) => {
 const { productId, quantity } = action.payload;
const found = state.items.find(i => i.productId === productId);
  if (found) found.quantity += quantity;
  else state.items.push({ productId, quantity });
 
};

export const removeFromCart = (state: CartState, action: PayloadAction<number>) => {
  state.items = state.items.filter(i => i.productId !== action.payload);
  
};

export const updateQuantity = (
  state: CartState,
  action: PayloadAction<{ id: number; quantity: number }>
) => {
  const item = state.items.find(i => i.productId === action.payload.id);
  if (!item) return;
  item.quantity = action.payload.quantity;

};

export const clearCart = (state: CartState) => {
  state.items = []; 
  
};

