import type { Product } from "@/types/Products";

export function filterProductsByIds(
  allProducts: Product[],
  ids: number[]
): Product[] {
  return allProducts.filter((product) => ids.includes(product.id));
}
