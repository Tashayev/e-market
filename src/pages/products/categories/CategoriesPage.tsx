import CategoryCard from "@/components/category-cards/CategoryCard";
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react";


export default function CategoriesPage() {
  const { categories, fetchCategories } = useProducts();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      {categories.map(c =>(
        <CategoryCard category={c} key={c.id}/>
      ))}      
    </div>
  )
}
