import { useEffect, useCallback } from "react";
import type { CartTypes } from "@/types/CartTyps";
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { cartActions } from "./index";
import { getProducts } from "./thunk/getCartProduct";

export const useCarts = () => {
  const dispatch = useDispatch();
  const { items, cartProducts, totalPrice, isLoading } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.products);

  // Загружаем продукты, если их нет
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products.length]);

  // Пересчитываем cartProducts и totalPrice после загрузки продуктов
  useEffect(() => {
    if (products.length > 0) dispatch(cartActions.updateCalculations(products));
  }, [dispatch, products, items]);

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

  const isProductInCart = useCallback((id: number) => items.some(i => i.productId === id), [items]);
  const getProductQuantity = useCallback((id: number) => items.find(i => i.productId === id)?.quantity ?? 0, [items]);

  return {
    items,
    isLoading,
    cartProducts,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    isProductInCart,
    getProductQuantity,
  };
};
