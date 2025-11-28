import type {  Product } from "./Products";

export interface CartTypes {
  productId: number;
  quantity: number;
}
export interface CartState {
  items: CartTypes[];
  isLoading: boolean;
  loaded: boolean
  
}
export type CartProduct = Product & {
  quantity: number;
}
