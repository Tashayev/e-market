import type { CartTypes } from "@/types/CartTyps";
import type { Product } from "@/types/Products";

export const calculateCartData = (items: CartTypes[], products: Product[]) => {
  const cartProducts = items.map((i) => {
    const product = products.find((p) => p.id === i.productId);

    return {
      id: i.productId,
      quantity: i.quantity,
      title: product?.title ?? "loading...",
      price: product?.price ?? 0,
      images: product?.images ?? [],
    };
  });

  const totalPrice = cartProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return { cartProducts, totalPrice, totalItems };
};
