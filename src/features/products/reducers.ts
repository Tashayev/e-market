import type { PayloadAction } from "@reduxjs/toolkit";

import type { Categories, ProductState } from "@/types/Products";

export const setCategories = (state: ProductState, action: PayloadAction<Categories[]>) => {
  state.categories = action.payload
}