//redux
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
//types
import type { CartState, CartTypes } from "@/types/CartTyps";
import type { Product,  } from "@/types/Products";
//reducers
import * as reducers from "./reducers";
//extraReducers
import { extraReducers } from "./extraReducer";
import { toast } from "react-toastify";

const calculateCartData = (items: CartTypes[], allProducts: Product[]) => {
  const cartProducts = allProducts.filter(product => 
    items.some(item => item.productId === product.id)
  ).map(product => {
    const cartItem = items.find(item => item.productId === product.id);
    return {
      ...product,
      quantity: cartItem?.quantity || 1
    };
  });
  
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return { cartProducts, totalPrice, totalItems };
};

const initialState: CartState = {
  items: [],
  isLoading: false,
  cartProducts: [],
  totalPrice: 0,
  totalItems: 0,
};

const initializeFromLocalStorage = (): CartState => {
  try {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const items = JSON.parse(cartData);
      return {
        ...initialState,
        items,
       
      };
    }
  } catch (error) {
    toast.error("Error parsing cart from localStorage: " + error);
  }
  return initialState;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initializeFromLocalStorage(),
  reducers: {
    ...reducers,    
   
    updateCartCalculations: (state, action: PayloadAction<Product[]>) => {
      const { cartProducts, totalPrice, totalItems } = calculateCartData(
        state.items, 
        action.payload
      );
      state.cartProducts = cartProducts;
      state.totalPrice = totalPrice;
      state.totalItems = totalItems;
    },
  },
  extraReducers
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;