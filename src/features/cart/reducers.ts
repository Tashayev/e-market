//types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartTypes } from "@/types/CartTyps";
import type { Product } from "@/types/Products";
import { calculateCartData } from "@/utils/calculateCartData";

const save = (items: CartTypes[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const addToCart = (
  state: CartState,
  action: PayloadAction<CartTypes>
) => {
  const { productId, quantity } = action.payload;

  const found = state.items.find((i) => i.productId === productId);

  if (found) found.quantity += quantity;
  else state.items.push({ productId, quantity });

  save(state.items);
};

export const removeFromCart = (
  state: CartState,
  action: PayloadAction<number>
) => {
  state.items = state.items.filter((i) => i.productId !== action.payload);
  save(state.items);
};

export const updateQuantity = (
  state: CartState,
  action: PayloadAction<{ id: number; quantity: number }>
) => {
  const item = state.items.find((i) => i.productId === action.payload.id);
  if (!item) return;

  item.quantity = action.payload.quantity;
  save(state.items);
};

export const clearCart = (state: CartState) => {
  state.items = [];
  state.cartProducts = [];
  state.totalPrice = 0;
  state.totalItems = 0;
  localStorage.removeItem("cart");
};

export const updateCalculations = (
  state: CartState,
  action: PayloadAction<Product[]>
) => {
  const { cartProducts, totalItems, totalPrice } = calculateCartData(
    state.items,
    action.payload
  );

  state.cartProducts = cartProducts;
  state.totalItems = totalItems;
  state.totalPrice = totalPrice;
};
