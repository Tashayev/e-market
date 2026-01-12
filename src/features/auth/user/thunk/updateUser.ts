//redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//base url
import baseService from "@/features/init/baseService";
//types
import type { UpdateUser } from "@/types/UserTypes";
//utils
import { withErrorHandler } from "@/tools/utils/withErrorHandler";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: UpdateUser, thunkAPI) => {
    return withErrorHandler(async () => {
      const response = await baseService.put(`/users/${data.id}`, data);
      return response.data;
    }, thunkAPI, "Error updating user: ");
    
  }
);
