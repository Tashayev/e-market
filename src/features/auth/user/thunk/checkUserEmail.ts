//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { AvailabelUser } from "@/types/AuthTypes";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const checkUserEmail = createAsyncThunk<boolean, AvailabelUser>(
  "user/checkUserEmail",
  async (data, thunkAPI) => {
    return withErrorHandler(
      async () => {
        const response = await baseService.get("/users");
        const users = response.data;
        const exists = users.some((user: any) => user.email === data.email);
        return exists;
      },
      thunkAPI,
      "Error checking user email: "
    );
  }
);
