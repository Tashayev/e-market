//types
import { type ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
import type { UserState } from "@/types/UserTypes";
//thunks
import { loginUser } from "./thunk/login";
import { getUser } from "./thunk/getUser";
import { updateUser } from "./thunk/updateUser";

export const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
  builder
    .addMatcher(isAnyOf(loginUser.pending, getUser.pending), (state) => {
      state.isLoading = true;
    })
    .addMatcher(
      isAnyOf(
        loginUser.fulfilled,
        loginUser.rejected,
        getUser.fulfilled,
        getUser.rejected
      ),
      (state) => {
        state.isLoading = false;
      }
    )
    .addMatcher(isAnyOf(loginUser.fulfilled), (state) => {
      state.isAuthenticated = true;
    })
    .addMatcher(isAnyOf(loginUser.rejected, getUser.rejected), (state) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = null;
    })
    .addMatcher(isAnyOf(getUser.fulfilled), (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = action.payload.role === "admin";
    })
    .addMatcher(isAnyOf(updateUser.fulfilled), (state, action) => {
      state.user = action.payload;
    });
};
