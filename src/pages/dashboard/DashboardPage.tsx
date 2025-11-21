import CategoryCard from "@/components/cards/category-cards/CategoryCard";
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react";
import {  Grid } from "@mui/material";


export const DashboardPage = () => {
  const { categories, fetchCategories } = useProducts();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Grid container spacing={0.5} >
      {categories.map((c) => (
        <CategoryCard category={c} key={c.id} />
      ))}
      
    </Grid>
  );
};
