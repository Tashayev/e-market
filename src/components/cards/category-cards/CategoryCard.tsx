import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router";
import type { Categories } from "@/types/Products";

type CategoriesProps = {
  category: Categories;
};

export default function CategoryCard({ category }: CategoriesProps) {
  const { name, id } = category;
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={`/category/${id}`}>
            <Button size="small">Go to {name}</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
}
