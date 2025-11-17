import { cartActions } from "./index";
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import type { CartProduct, CartTypes } from "@/types/CartTyps";
import { useProducts } from "../products/useProduct";

import { filterProductsByIds } from "@/utils/filteredProducts";

export const useCarts = () => {
  const dispatch = useDispatch();
  const { products } = useProducts();

  const cartsItems = useSelector((state) => state.cart.items);
  const cartsId = cartsItems.map((i) => i.productId);
  const filteredProducts = filterProductsByIds(products, cartsId);

  const cartProducts: CartProduct[] = filteredProducts.map((p) => {
    const productQuntity = cartsItems.find((c) => c.productId === p.id);
    return {
      ...p, 
      quantity: productQuntity?.quantity || 1, 
    };
  });

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + (product.price * product.quantity);
  },0)

  return {
    cartProducts,
    totalPrice,
    addToCart: (data: CartTypes) => dispatch(cartActions.addToCart(data)),
     removeFromCart: (productId: number) =>
      dispatch(cartActions.removeFromCart({ productId })),
  };
};
