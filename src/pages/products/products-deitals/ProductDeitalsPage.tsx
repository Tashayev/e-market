import { useProducts } from "@/features/products/useProduct";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router"


export default function ProductDeitalsPage() {
  const {productById, fetchProductById} = useProducts()
  const {id} = useParams<{id: string}>();
  useEffect(()=>{
    if(id) fetchProductById(Number(id))
  },[id])

  return (
    <div>
      <Typography>Name of product: {productById?.title}</Typography>
      <Typography>Description: {productById?.description}</Typography>
      {productById?.images.map(i =>(
        <img src={i} alt="images" width={200}/>
      ))}
    </div>
  )
}
