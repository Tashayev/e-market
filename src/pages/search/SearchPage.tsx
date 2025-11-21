import ProductCard from "@/components/cards/product-card/ProductCard";
import { useProductSearch } from "@/features/products/useProductSearch";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const {fetchSearchProductsByTitle, searchResults} = useProductSearch();
  const toLowerCaseQuery = query.toLowerCase();
  useEffect(()=>{
    fetchSearchProductsByTitle(toLowerCaseQuery);
   },[toLowerCaseQuery])
  return (
    <Box>
      {searchResults.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  )
}
