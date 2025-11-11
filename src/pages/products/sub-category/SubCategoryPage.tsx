import ProductCard from "@/components/product-card/ProductCard";
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react"
import { useParams } from "react-router"
import { style } from "./subCategory";


export default function SubCategoryPage() {
  const {id} = useParams<{id: string}>();
  const {products, fetchProductsByCategory} = useProducts()
  useEffect(()=>{
    if(id) fetchProductsByCategory(Number(id));
  },[id])
  return (
    <div style={style.container}>
      {products.map(p => (
        <ProductCard product={p} key={p.id}/>
      ))}
    </div>
  )
}
