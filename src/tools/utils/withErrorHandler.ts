import { toast } from "react-toastify";
import { favoritesActions } from "@/features/favorites";

export const withErrorHandler = async <T>(
  fn: () => Promise<T>,
  thunkAPI?: any,
  customMessage?: string
): Promise<T> => {
  try {
    return await fn();
  } catch (e: any) {
    const status = e.response?.status;
    const msg = (customMessage || "") + (e.response?.data?.message || e.message);

    if (status === 401 && thunkAPI) {
      const id = thunkAPI.arg; 
      thunkAPI.dispatch(favoritesActions.removeFromFavorites(id));
      toast.error("Unauthorized access. Product removed from favorites");
    } else {
      toast.error(msg);
    }

    if (thunkAPI) {
      return thunkAPI.rejectWithValue(msg);
    }

    throw e;
  }
};
