import { useProducts } from "@/features/products/useProduct";
import {  ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router";
import { productSx } from "./productStyle";

export default function ProductDeitalsPage() {
  const { productById, fetchProductById } = useProducts();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) fetchProductById(Number(id));
  }, [id, fetchProductById]);

  return (
    <Stack spacing={5} >
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
