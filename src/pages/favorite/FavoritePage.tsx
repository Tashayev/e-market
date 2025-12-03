import ProductCard from "@/components/cards/product-card/ProductCard";
import { useFavorites } from "@/features/favorites/useFavorites";
import { useResponsivePagination } from "@/tools/hooks/useResponsivePagination";
import { Box, Grid, Pagination } from "@mui/material";


export default function FavoritePage() {
  const {favoriteProducts} = useFavorites();
  const {
    page,
    setPage,
    totalPages,
    paginatedItems: productsToShow,
  } = useResponsivePagination(favoriteProducts);
  return (
    <Box >
      <Grid container spacing={0.5}>
        {productsToShow.map((c) => (
          <ProductCard product={c} key={c.id} />
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
  )
}

 