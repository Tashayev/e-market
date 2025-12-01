import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router";
import type { Categories } from "@/types/Products";
import { useEffect, useState } from "react";
import { categorySx } from "./categoryStyle";

type CategoriesProps = {
  category: Categories;
};

export default function CategoryCard({ category }: CategoriesProps) {
  const { name, id, image } = category;
  const [imageUrl, setImageUrl] = useState(image);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageUrl(image);
    img.onerror = () =>
      setImageUrl(
        "https://st2.depositphotos.com/1000213/12154/v/950/depositphotos_121545110-stock-illustration-white-showcase-with-red-awning.jpg"
      );
    img.src = image;
  }, [image]);
  return (
    <Box sx={categorySx.Box}>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          marginTop: "10px",
        }}
      />

      <NavLink to={`/category/${id}`}>
        <Button size="small">Go to {name}</Button>
      </NavLink>
    </Box>
  );
}
