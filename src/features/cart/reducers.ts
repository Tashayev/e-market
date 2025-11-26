//types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartTypes } from "@/types/CartTyps";
import type { Product } from "@/types/Products";

const updateLocalStorage = (items: CartTypes[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const updateCalculations = (state: CartState, allProducts: Product[] = []) => {
  if (allProducts.length === 0) return;
  
  state.cartProducts = allProducts.filter(product => 
    state.items.some(item => item.productId === product.id)
  ).map(product => {
    const cartItem = state.items.find(item => item.productId === product.id);
    return {
      ...product,
      quantity: cartItem?.quantity || 1
    };
  });
  
  state.totalPrice = state.cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  
  state.totalItems = state.items.reduce((total, item) => 
    total + item.quantity, 0
  );
};

export const addToCart = (
  state: CartState,
  action: PayloadAction<CartTypes>
) => {
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

export const removeFromCart = (
  state: CartState,
  action: PayloadAction<{ productId: number; allProducts?: Product[] }>
) => {
  const { productId, allProducts } = action.payload;
  state.items = state.items.filter((item) => item.productId !== productId);
  updateLocalStorage(state.items);
  
  if (allProducts) {
    updateCalculations(state, allProducts);
  }
};

export const updateQuantity = (
  state: CartState,
  action: PayloadAction<{ productId: number; quantity: number; allProducts?: Product[] }>
) => {
  const { productId, quantity, allProducts } = action.payload;
  const item = state.items.find((item) => item.productId === productId);

  if (item) {
    item.quantity = quantity;
    updateLocalStorage(state.items);
    
    if (allProducts) {
      updateCalculations(state, allProducts);
    }
  }
};

export const clearCart = (state: CartState) => {
  state.items = [];
  state.cartProducts = [];
  state.totalPrice = 0;
  state.totalItems = 0;
  localStorage.removeItem("cart");
};

export const updateCartCalculations = (
  state: CartState,
  action: PayloadAction<Product[]>
) => {
  updateCalculations(state, action.payload);
};