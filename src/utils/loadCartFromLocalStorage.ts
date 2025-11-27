import type { CartState } from "@/types/CartTyps";
import { calculateCartData } from "@/utils/calculateCartData";

export const loadCartFromLocalStorage = (): CartState => {
  try {
    const cartData = localStorage.getItem("cart");
    const items = cartData ? JSON.parse(cartData) : [];
    const { cartProducts, totalPrice, totalItems } = calculateCartData(items, []);
    return {
      items,
      cartProducts,
      totalPrice,
      totalItems,
      isLoading: false,
    };
  } catch (e) {
    console.error("Failed to load cart", e);
    return {
      items: [],
      cartProducts: [],
      totalPrice: 0,
      totalItems: 0,
      isLoading: false,
    };
  }
};
