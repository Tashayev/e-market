import type {  Product } from "./Products";

export interface CartTypes {
  productId: number;
  quantity: number;
}
export interface CartState {
  items: CartTypes[];
}
export type CartProduct = Product & {
  quantity: number;
}
