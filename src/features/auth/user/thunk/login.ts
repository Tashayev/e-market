//base url
import baseService from "@/features/init/baseService";
//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: { email: string; password: string }, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const response = await baseService.post("/auth/login", data);
        return response.data;
      },
      thunkAPI,
      "Error logging in user: "
    );
  }
);
