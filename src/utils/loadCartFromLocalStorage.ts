import type { CartTypes } from "@/types/CartTyps";

export const loadCartFromLocalStorage = (): CartTypes[] => {
  try {
    const json = localStorage.getItem("cart");
    if (!json) return [];
    return JSON.parse(json) as CartTypes[];
  } catch {
    return [];
  }
};
