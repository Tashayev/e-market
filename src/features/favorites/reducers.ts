import type { PayloadAction } from "@reduxjs/toolkit";
import type { FavoritesState } from "@/types/FavoritesTypes";

export const toggleFavorite = (
  state: FavoritesState,
  action: PayloadAction<number>
) => {
  const id = action.payload;

  if (state.items.includes(id)) {
    state.items = state.items.filter((itemId) => itemId !== id);
  } else {
    state.items.push(id);
  }
};

export const clearFavorites = (state: FavoritesState) => {
  state.items = [];
};
