//redux
import { createSlice } from "@reduxjs/toolkit";
//types
import type { UserState } from "@/types/UserTypes";
//reducers
import * as reducers from "./reducers";
import { extraReducers } from "./extraReducer";

const hasToken = !!localStorage.getItem("accessToken");

const initialState: UserState = {
  isLoading: false,
  user: null,
  isAuthenticated: hasToken,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
  extraReducers,
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
