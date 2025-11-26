import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { searchProductsByTitle } from "./thunk/searchProductByTitle";
import { productActions } from ".";
import { toast } from "react-toastify";

export const useProductSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.product.searchResults);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);
  const fetchSearchProductsByTitle = async (term: string) => {
    if (!term.trim()) {
      dispatch(productActions.clearSearchResults());
      return;
    }
    try {
      return await dispatch(searchProductsByTitle(term)).unwrap();
    } catch (error) {
      toast.error("Search failed: " + error);
      throw error;
    }
  };
  const addProductIfMissing = (data: any) => {
    dispatch(productActions.addProductIfMissing(data));
  }
  const clearSearch = () => {
    dispatch(productActions.clearSearchResults());
  };
  return {
    searchResults,
    isLoading,
    fetchSearchProductsByTitle,
    clearSearch,
    error,
    addProductIfMissing
  };
};
