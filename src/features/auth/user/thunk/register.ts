//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { RegisterForm } from "@/types/AuthTypes";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data: RegisterForm, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const response = await baseService.post("/users/", data);
        return response.data;
      },
      thunkAPI,
      "Error registering user: "
    );
  }
);
