import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { favoritesActions } from "./index";
import { filterFavoriteData } from "@/tools/utils/filterFavoriteData";
import { useMemo } from "react";

export function useFavorites() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.favorites.items);

  const toggleFavorite = (id: number) => {
    dispatch(favoritesActions.toggleFavorite(id));
  };

  const clearFavorites = () => {
    dispatch(favoritesActions.clearFavorites());
  };
  const products = useSelector((state) => state.product.products);
  const isFavorite = (id: number) => items.includes(id);
  const favoriteProducts = useMemo(
    () => filterFavoriteData(items, products),
    [items, products]
  );
  const removeFromFavorites = (id: number) => {
    dispatch(favoritesActions.removeFromFavorites(id));
  };
  return {
    favoriteProducts,
    items,
    toggleFavorite,
    clearFavorites,
    isFavorite,
    removeFromFavorites,
  };
}
