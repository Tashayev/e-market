//react
import { useCallback, useMemo } from "react";
//types
import type { CartTypes } from "@/types/CartTyps";
//redux
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
//actions
import { cartActions } from "./index";
//utils
import { calculateCartData } from "@/utils/calculateCartData";

export const useCarts = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.products);

  const { cartProducts, totalPrice, totalItems } = useMemo(
    () => calculateCartData(items, products),
    [items, products]
  );

  const addToCart = useCallback(
    (data: CartTypes) => dispatch(cartActions.addToCart(data)),
    [dispatch]
  );

  const removeFromCart = useCallback(
    (id: number) => dispatch(cartActions.removeFromCart(id)),
    [dispatch]
  );

  const updateQuantity = useCallback(
    (id: number, quantity: number) =>
      dispatch(cartActions.updateQuantity({ id, quantity })),
    [dispatch]
  );

  const clearCart = useCallback(
    () => dispatch(cartActions.clearCart()),
    [dispatch]
  );

  const isProductInCart = useCallback(
    (id: number) => items.some((i) => i.productId === id),
    [items]
  );

  const getProductQuantity = useCallback(
    (id: number) => items.find((i) => i.productId === id)?.quantity ?? 0,
    [items]
  );

  return {
    items,
    cartProducts,
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isProductInCart,
    getProductQuantity,
  };
};
