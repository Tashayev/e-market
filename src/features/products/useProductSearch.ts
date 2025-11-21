import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { searchProductsByTitle } from "./thunk/searchProductByTitle";


export const useProductSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.product.searchResults);  
  const isLoading = useSelector((state) => state.product.isLoading);
  const fetchSearchProductsByTitle = async (term: string) => {
    return dispatch(searchProductsByTitle(term)).unwrap();
  }
  return{
    searchResults,
    isLoading,
    fetchSearchProductsByTitle
  }
}