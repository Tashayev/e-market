
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react"
import { useParams } from "react-router"

import {  Grid } from "@mui/material";
import ProductCard from "@/components/cards/product-card/ProductCard";


export default function CategoryPage() {
  const {id} = useParams<{id: string}>();
  const {products, fetchProductsByCategory} = useProducts()
  useEffect(()=>{
    if(id) fetchProductsByCategory(Number(id));
  },[id])
  return (
    <Grid columnSpacing={{ xs: 1, sm: 3, md: 5, lg: 8}} container rowSpacing={2}>
      {products.map(p => (
        <ProductCard product={p} key={p.id}/>
      ))}
    </Grid>
  )
}
