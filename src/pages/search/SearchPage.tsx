import ProductCard from "@/components/cards/product-card/ProductCard";
import { useProductSearch } from "@/features/products/useProductSearch";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { fetchSearchProductsByTitle, searchResults, isLoading, error } = useProductSearch();
  const toLowerCaseQuery = query.toLowerCase();
  useEffect(() => {
    fetchSearchProductsByTitle(toLowerCaseQuery);
  }, [toLowerCaseQuery]);
  return (
    <Box>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : error ? (
        <Box>Error: {error}</Box> 
      ) : searchResults.length === 0 ? (
        <Box>No products found</Box>
      ) : (
        searchResults.map((product) => (
          <Box key={product.id} mb={2}>
            <ProductCard product={product} />
          </Box>
        ))
      )}
    </Box>
  );
}
