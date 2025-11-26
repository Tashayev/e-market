import type {  Product } from "./Products";

export interface CartTypes {
  productId: number;
  quantity: number;
}
export interface CartState {
  items: CartTypes[];
  isLoading: boolean;
  cartProducts: CartProduct[];
  totalPrice: number;
  totalItems: number;
}
export type CartProduct = Product & {
  quantity: number;
}
