import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartTypes } from "@/types/CartTyps";


const updateLocalStorage = (items: CartTypes[]) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

export const addToCart = (state: CartState, action: PayloadAction<CartTypes>) => {
  const { productId, quantity } = action.payload;
  const indexProductId = state.items.findIndex(
    (item) => item.productId === productId
  );
  
  if (indexProductId >= 0) {
    state.items[indexProductId].quantity += quantity;
  } else {
    state.items.push({ productId, quantity });
  }
  
  updateLocalStorage(state.items);
};

export const removeFromCart = (state: CartState, action: PayloadAction<{ productId: number }>) => {
  const { productId } = action.payload;
  state.items = state.items.filter((item) => item.productId !== productId);
  updateLocalStorage(state.items);
};

export const updateQuantity = (state: CartState, action: PayloadAction<{ productId: number; quantity: number }>) => {
  const { productId, quantity } = action.payload;
  const item = state.items.find((item) => item.productId === productId);
  
  if (item) {
    item.quantity = quantity;
    updateLocalStorage(state.items);
  }
};

export const clearCart = (state: CartState) => {
  state.items = [];
  localStorage.removeItem('cart');
};