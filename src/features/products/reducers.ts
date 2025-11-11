import type { PayloadAction } from "@reduxjs/toolkit";

import type { Categories, ProductState } from "@/types/Products";

// export const setIsAuthenticated = (
//   state: UserState,
//   action: PayloadAction<boolean>
// ) => {
//   state.isAuthenticated = action.payload;
// };

// export const setUser = (state: UserState, action: PayloadAction<User>) => {
//   state.user = action.payload;
//    state.isAuthenticated = true;
// };

// export const removeUserDetails = (state: UserState) => {
//   state.user = null;
//   state.isAuthenticated = false;
// };
export const setCategories = (state: ProductState, action: PayloadAction<Categories[]>) => {
  state.categories = action.payload
}