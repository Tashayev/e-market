//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { User } from "@/types/UserTypes";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const getUser = createAsyncThunk<User>(
  "user/getProfile",
  async (_, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const res = await baseService.get("/auth/profile");
        return res.data;
      },
      thunkAPI,
      "Error fetching user profile: "
    );
  }
);
