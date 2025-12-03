import CategoryCard from "@/components/cards/category-cards/CategoryCard";
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { useResponsivePagination } from "@/tools/hooks/useResponsivePagination";
import { dashboardSx } from "./dashboard";

export const DashboardPage = () => {
  const { categories, fetchCategories } = useProducts();
  useEffect(() => {
    fetchCategories();
  }, []);
  const {
    page,
    setPage,
    totalPages,
    paginatedItems: productsToShow,
  } = useResponsivePagination(categories);
  return (
    <Box sx={dashboardSx.Box}>
      <Grid container spacing={0.5}>
        {productsToShow.map((c) => (
          <CategoryCard category={c} key={c.id} />
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, val) => setPage(val)}
          color="primary"
          shape="rounded"
        />
      )}
    </Box>
  );
};
