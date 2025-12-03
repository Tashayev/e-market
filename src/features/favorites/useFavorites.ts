import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { favoritesActions } from "./index";

export function useFavorites() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.favorites.items);

  const toggleFavorite = (id: number) => {
    dispatch(favoritesActions.toggleFavorite(id));
  };

  const clearFavorites = () => {
    dispatch(favoritesActions.clearFavorites());
  };

  const isFavorite = (id: number) => items.includes(id);

  return {
    items,
    toggleFavorite,
    clearFavorites,
    isFavorite,
  };
}
