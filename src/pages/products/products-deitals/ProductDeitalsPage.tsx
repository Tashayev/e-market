import { useProducts } from "@/features/products/useProduct";
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { productSx } from "./productStyle";
import { useCarts } from "@/features/cart/useCart";
import { ShoppingBag } from "lucide-react";

export default function ProductDeitalsPage() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string | undefined }>();
  const numId = Number(id);
  const { addToCart } = useCarts();
  const { productById, fetchProductById, addProductIfMissing } = useProducts();

  useEffect(() => {
    if (numId) fetchProductById(numId);
  }, [numId, fetchProductById]);

  const handleAddCart = () => {
    if (!productById) return;
    
    addProductIfMissing(productById);
    
    addToCart({
      productId: productById.id,
      quantity: 1,
    });
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Stack spacing={5}>
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
              <img src={image} alt="pic" loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Stack>
  );
}
