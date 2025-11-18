import { useCallback, useMemo } from "react";
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
  
  const memoizedCartsItems = useMemo(() => cartsItems, [cartsItems]);
  const memoizedProducts = useMemo(() => products, [products]);
 
  const cartsId = useMemo(() => 
    memoizedCartsItems.map((i) => i.productId),
    [memoizedCartsItems]
  );
  
  const filteredProducts = useMemo(() => 
    filterProductsByIds(memoizedProducts, cartsId),
    [memoizedProducts, cartsId]
  );
  
  const cartProducts: CartProduct[] = useMemo(() => 
    filteredProducts.map((p) => {
      const productQuantity = memoizedCartsItems.find((c) => c.productId === p.id);
      return {
        ...p, 
        quantity: productQuantity?.quantity || 1, 
      };
    }),
    [filteredProducts, memoizedCartsItems]
  );
  
  const totalPrice = useMemo(() => 
    cartProducts.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0),
    [cartProducts]
  );
 
  const totalItems = useMemo(() => 
    memoizedCartsItems.reduce((total, item) => total + item.quantity, 0),
    [memoizedCartsItems]
  );
  
  const addToCartAction = useCallback(
    (data: CartTypes) => dispatch(cartActions.addToCart(data)),
    [dispatch]
  );

  const removeFromCartAction = useCallback(
    (productId: number) => dispatch(cartActions.removeFromCart({ productId })),
    [dispatch]
  );

  const getProductQuantity = useCallback(
    (productId: number) => {
      const item = memoizedCartsItems.find(item => item.productId === productId);
      return item ? item.quantity : 0;
    },
    [memoizedCartsItems]
  );

  const isProductInCart = useCallback(
    (productId: number) => {
      return memoizedCartsItems.some(item => item.productId === productId);
    },
    [memoizedCartsItems]
  );

  return useMemo(
    () => ({
      // State
      cartProducts,
      totalPrice,
      totalItems,
      cartItems: memoizedCartsItems,
      
      // Actions
      addToCart: addToCartAction,
      removeFromCart: removeFromCartAction,
      
      // Getters
      getProductQuantity,
      isProductInCart,
    }),
    [
      cartProducts,
      totalPrice,
      totalItems,
      memoizedCartsItems,
      addToCartAction,
      removeFromCartAction,
      getProductQuantity,
      isProductInCart,
    ]
  );
};