import { useProducts } from "@/features/products/useProduct";
import {  Box, Button, IconButton, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { productSx } from "./productStyle";
import { useCarts } from "@/features/cart/useCart";
import { ShoppingBag } from "lucide-react";

export default function ProductDeitalsPage() {
  const { productById, fetchProductById } = useProducts();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { fromSearch, searchQuery } = location.state || {};
const { addToCart } = useCarts();
  const handleAddCart = () => {
    addToCart({ productId: Number(id), quantity: 1 });
  };
  const handleBack = () => {
    if (fromSearch && searchQuery) {
      
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(-1); 
    }
  };
  useEffect(() => {
    if (id) fetchProductById(Number(id));
  }, [id, fetchProductById]);

  return (
    <Stack spacing={5} >
      <Box sx={productSx.ButtonBox}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <IconButton color="primary" onClick={handleAddCart}>
          <ShoppingBag />
        </IconButton>
      </Box>
      <Typography variant="h6">
        Name of product: {productById?.title}
      </Typography>
      <Typography variant="body1">
        Description: {productById?.description}
      </Typography>
      {productById?.images && (
        <ImageList sx={productSx.ImageList} cols={3} rowHeight={164}>
          {productById.images.map((image) => (
            <ImageListItem key={image}>
              <img
                src={image}
                alt="pic"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Stack>
  );
}
