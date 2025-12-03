import { toast } from "react-toastify";

export const withErrorHandler = async <T>(
  fn: () => Promise<T>,
  thunkAPI?: any,
  customMessage?: string
): Promise<T> => {
  try {
    return await fn();
  } catch (e: any) {
    const message = customMessage || e.response?.data?.message || e.message || "Unknown error";
    toast.error(message);
    if (thunkAPI) return thunkAPI.rejectWithValue(e.response?.data || e.message);
    throw e;
  }
};
