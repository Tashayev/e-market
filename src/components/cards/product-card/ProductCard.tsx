import { Typography, Button, Box } from "@mui/material";

import { useLocation, useNavigate } from "react-router";
import type { Product } from "@/types/Products";

import { productSx } from "./product";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "@/features/favorites/useFavorites";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const { title, price, id, images } = product;
  const [imageUrl, setImageUrl] = useState(images[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorites();

  const active = isFavorite(product.id);
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
    <Box sx={productSx.Box}>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Button onClick={() => toggleFavorite(product.id)}>
          {active ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </Button>
      </Box>
      <Box component="img" src={imageUrl} sx={productSx.Img} />
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        Price: ${price}
      </Typography>

      <Box sx={productSx.BtnWrapper}>
        <Button
          onClick={handleOpenProduct}
          variant="outlined"
          size="small"
          sx={productSx.Button}
        >
          Open
        </Button>
      </Box>
    </Box>
  );
}
