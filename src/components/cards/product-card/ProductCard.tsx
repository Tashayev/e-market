import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router";
import type { Product } from "@/types/Products";

import { productSx } from "./product";
import { useEffect, useState } from "react";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const { title, price, id, images } = product;
  const [imageUrl, setImageUrl] = useState(images[0]);
  const navigate = useNavigate();
  const location = useLocation();

  //const isSearchPage = location.pathname === "/search";
  //const searchParams = new URLSearchParams(location.search);
  //const currentSearchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageUrl(images[0]);
    img.onerror = () =>
      setImageUrl(
        "https://www.sourcingwing.com/images/product-placeholder.jpg"
      );
    img.src = images[0];
  }, [images]);

  const handleOpenProduct = () => {
    const isSearch = location.pathname === "/search";
    const query = new URLSearchParams(location.search).get("query");

    navigate(`/product/${id}`, {
      state: {
        fromSearch: isSearch,
        searchQuery: query,
      },
    });
  };

  return (
    <Card sx={productSx.Card}>
      <CardContent sx={productSx.CardContent}>
        <Typography variant="h6" component="h6" gutterBottom>
          {title}
        </Typography>
        <img src={imageUrl} width={200} />
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Price: ${price}
        </Typography>
      </CardContent>

      <CardActions sx={productSx.CardActions}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            onClick={handleOpenProduct}
            variant="outlined"
            size="small"
            sx={productSx.Button}
          >
            Open
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
