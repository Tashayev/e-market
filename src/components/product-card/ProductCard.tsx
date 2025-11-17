import { Typography } from "@mui/material";
import { style } from "./product";
import type { Product } from "@/types/Products";
import { NavLink } from "react-router";
import { ShoppingBag } from "lucide-react";
import { useCarts } from "@/features/cart/useCart";

interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  const { title, price, id } = product;  
  const {addToCart } = useCarts();
  
  const handleAddCart = () => {
    addToCart({productId: id, quantity: 1});
   
  };
 
  return (
    <div style={style.card}>
      <Typography>Name: {title}</Typography>
      <Typography>Coast: {price}$</Typography>
      <div style={style.btns}>
        <NavLink to={`/product/${id}`}>
          <Typography style={style.text}>Open</Typography>
        </NavLink>
        <ShoppingBag style={style.icon} onClick={handleAddCart}/>
      </div>
    </div>
  );
}
