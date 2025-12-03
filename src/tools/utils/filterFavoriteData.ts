//types
import type { Product } from "@/types/Products";

export const filterFavoriteData = (favoriteIds: number[], products: Product[]) => {
 
  return  products.filter((product) => favoriteIds.includes(product.id)); 
}