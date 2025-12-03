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
  const searchCache = useSelector((state) => state.product.searchCache);


  const fetchSearchProductsByTitle = async (term: string) => {
    const lower = term.toLowerCase().trim();
    
    if (!lower) {
      dispatch(productActions.clearSearchResults());
      return;
    }
   
    if (searchCache[lower]) {
      dispatch(productActions.setSearchResults(searchCache[lower]));
      return searchCache[lower];
    }
    
    try {
      const data = await dispatch(searchProductsByTitle(lower)).unwrap();
      dispatch(productActions.cacheSearchResult({ query: lower, data }));
      return data;
    } catch (error) {
      toast.error("Search failed: " + error);
      throw error;
    }
  };

  const addProductIfMissing = (data: any) => {
    dispatch(productActions.addProductIfMissing(data));
  };
  
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
