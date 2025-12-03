import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react";
import { useParams } from "react-router";

import { Box, Grid, Pagination } from "@mui/material";
import ProductCard from "@/components/cards/product-card/ProductCard";
import { useResponsivePagination } from "@/tools/hooks/useResponsivePagination";
import { categorySx } from "./category";

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const { products, fetchProductsByCategory } = useProducts();
  useEffect(() => {
    if (id) fetchProductsByCategory(Number(id));
  }, [id]);
  const {
    page,
    setPage,
    totalPages,
    paginatedItems: productsToShow,
  } = useResponsivePagination(products);
  return (
    <Box sx={categorySx.Box}>
      <Box>
        <Grid container spacing={0.5}>
          {productsToShow.map((p) => (
            <ProductCard product={p} key={p.id} />
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
    </Box>
  );
}
