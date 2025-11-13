import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { loginUser } from "./thunk/login";
import { getUser } from "./thunk/getUser";
import type { UserState } from "@/types/UserTypes";
import { updateUser } from "./thunk/updateUser";

const hasToken = !!localStorage.getItem("accessToken");

const initialState: UserState = {
  isLoading: false,
  user: null,
  isAuthenticated: hasToken,
  isAdmin: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;        
      })
      .addCase(updateUser.fulfilled, (state, action) =>{
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.isAdmin = false
      })

      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isAdmin = action.payload.role === 'admin';
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.isAdmin = false
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
