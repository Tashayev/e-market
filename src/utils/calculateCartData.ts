import type { CartTypes } from "@/types/CartTyps";
import type { Product } from "@/types/Products";

export const calculateCartData = (items: CartTypes[], products: Product[]) => {
  if (products.length === 0) {
    return {
      cartProducts: items.map((i) => ({
        id: i.productId,
        quantity: i.quantity,
        title: "loading...",
        price: 0,
      })),
      totalPrice: 0,
      totalItems: items.reduce((s, i) => s + i.quantity, 0),
    };
  }

  const cartProducts = products
    .filter((p) => items.some((i) => i.productId === p.id))
    .map((p) => {
      const cartItem = items.find((i) => i.productId === p.id);

      return { ...p, quantity: cartItem?.quantity ?? 1 };
    });

  const totalPrice = cartProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return { cartProducts, totalPrice, totalItems };
};
