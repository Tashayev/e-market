//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
//reducers
import userReducer from "@/features/auth/user";
import productReducer from "@/features/products";
import cartReducer from "@/features/cart";
//middleware
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";
//utils
import { loadCartFromLocalStorage } from "@/utils/loadCartFromLocalStorage";
import type { CartState } from "@/types/CartTyps";

const preloadedCart: CartState = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
  },
  preloadedState: {
    cart: preloadedCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
