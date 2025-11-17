import { cartActions } from "./index";
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import type { CartTypes } from "@/types/CartTyps";

export const useCarts = () => {
  const dispatch = useDispatch();
  
   
  return {
    cart: useSelector((state)=> state.cart.items),
    addToCart: (data:CartTypes) => dispatch(cartActions.addToCart(data)),
    removeFromCart: (data:CartTypes) => dispatch(cartActions.removeFromCart(data))
  };
};
