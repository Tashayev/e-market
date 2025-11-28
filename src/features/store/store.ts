//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
//reducers
import userReducer from "@/features/auth/user";
import productReducer from "@/features/products";
import cartReducer from "@/features/cart";
//middleware
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";
import { loadCartFromLocalStorage } from "@/utils/loadCartFromLocalStorage";
import { cartInitialState } from "@/features/cart";
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
  },
preloadedState: {
    cart: {
    ...cartInitialState,
    items: loadCartFromLocalStorage()
  }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false 
    }).concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
