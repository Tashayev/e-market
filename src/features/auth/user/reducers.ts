//types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from "@/types/UserTypes";

export const setIsAuthenticated = (
  state: UserState,
  action: PayloadAction<boolean>
) => {
  state.isAuthenticated = action.payload;
};

export const setUser = (state: UserState, action: PayloadAction<User>) => {
  state.user = action.payload;
  state.isAuthenticated = true;
  state.isAdmin = action.payload.role === "admin";
};

export const removeUserDetails = (state: UserState) => {
  state.user = null;
  state.isAuthenticated = false;
};
