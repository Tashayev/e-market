import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";
import type { Product } from "@/types/Products";
import { useCarts } from "@/features/cart/useCart";
import { productSx } from "./product";
import { useEffect, useState } from "react";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const { title, price, id, images } = product;
  const { addToCart } = useCarts();
  const [imageUrl, setImageUrl] = useState(images[0]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageUrl(images[0]);
    img.onerror = () =>
      setImageUrl(
        "https://www.sourcingwing.com/images/product-placeholder.jpg"
      );
    img.src = images[0];
  }, [images]);

  const handleAddCart = () => {
    addToCart({ productId: id, quantity: 1 });
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
            component={NavLink}
            to={`/product/${id}`}
            variant="outlined"
            size="small"
            sx={productSx.Button}
          >
            Open
          </Button>

          <IconButton
            onClick={handleAddCart}
            sx={productSx.Button}
          >
            <ShoppingBag size={20} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
