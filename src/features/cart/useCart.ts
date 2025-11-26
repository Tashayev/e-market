import { useCallback, useEffect } from "react";
//types
import type { CartTypes } from "@/types/CartTyps";
//hooks
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";

import { cartActions } from "./index";
import { getProducts } from "./thunk/getCartProduct";

export const useCarts = () => {
  const dispatch = useDispatch();

  const {
    cartProducts,
    totalPrice,
    totalItems,
    items: cartsItems,
    isLoading
  } = useSelector((state) => state.cart);

  const products = useSelector((state) => state.product.products);

   
  useEffect(() => {
    if (products.length === 0) { 
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

   
  useEffect(() => {
    if (products.length > 0 && cartsItems.length > 0) {
      dispatch(cartActions.updateCartCalculations(products));
    } else if (cartsItems.length === 0) {
      
      dispatch(cartActions.clearCart());
    }
  }, [dispatch, products, cartsItems]);   

  const addToCart = useCallback(
    (data: CartTypes) => dispatch(cartActions.addToCart(data)),
    [dispatch]
  );

  const removeFromCart = useCallback(
    (productId: number) => dispatch(cartActions.removeFromCart({ productId })),
    [dispatch]
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => 
      dispatch(cartActions.updateQuantity({ productId, quantity })),
    [dispatch]
  );

  const getProductQuantity = useCallback(
    (productId: number) => {
      const item = cartsItems.find(item => item.productId === productId);
      return item ? item.quantity : 0;
    },
    [cartsItems]
  );

  const isProductInCart = useCallback(
    (productId: number) => {
      return cartsItems.some(item => item.productId === productId);
    },
    [cartsItems]
  );
console.log('useCarts cartProducts:', cartProducts);
  return {
    cartProducts,
    totalPrice,
    totalItems,
    cartsItems,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,  
    getProductQuantity,
    isProductInCart,
  };
};