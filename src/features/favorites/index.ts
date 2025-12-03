import type { FavoritesState } from "@/types/FavoritesTypes";
import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers,
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
