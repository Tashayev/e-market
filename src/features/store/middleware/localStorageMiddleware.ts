import type { RootState } from "../store";
import type { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (
      action &&
      typeof action === "object" &&
      "type" in action &&
      String(action.type).startsWith("cart/")
    ) {
      const state = store.getState() as RootState;
      
      localStorage.setItem("cart", JSON.stringify(state.cart.items));
     
    }

    return result;
  };
