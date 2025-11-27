import type { CartTypes } from "@/types/CartTyps";
import type { Product } from "@/types/Products";

export const calculateCartData = (items: CartTypes[], products: Product[]) => {
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
