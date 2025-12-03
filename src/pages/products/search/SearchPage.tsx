import ProductCard from "@/components/cards/product-card/ProductCard";
import { useProductSearch } from "@/features/products/useProductSearch";
import { useResponsivePagination } from "@/tools/hooks/useResponsivePagination";
import { Box, Grid, Pagination } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { fetchSearchProductsByTitle, searchResults, isLoading, error } =
    useProductSearch();
  const toLowerCaseQuery = query.toLowerCase();
  useEffect(() => {
    fetchSearchProductsByTitle(toLowerCaseQuery);
  }, [toLowerCaseQuery]);
  const {
    page,
    setPage,
    totalPages,
    paginatedItems: productsToShow,
  } = useResponsivePagination(searchResults);
  return (
    <>
      <Grid container spacing={0.5}>
        {isLoading ? (
          <Box>Loading...</Box>
        ) : error ? (
          <Box>Error: {error}</Box>
        ) : searchResults.length === 0 ? (
          <Box>No products found</Box>
        ) : (
          productsToShow.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          page={page}
          count={totalPages}
          onChange={(_, val) => setPage(val)}
          color="primary"
          shape="rounded"
        />
      )}
    </>
  );
}
