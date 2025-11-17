import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cartCardSx } from "./cartCardSx";
import { useCarts } from "@/features/cart/useCart";

type CartCardType = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

export default function CartCard({ id, quantity, title, price }: CartCardType) {
  const { removeFromCart } = useCarts();

  return (
    <Card sx={cartCardSx.Card}>
      <CardContent>
        <Typography gutterBottom sx={cartCardSx.Typography}>
          name: {title}
        </Typography>
        <Typography sx={cartCardSx.Typography}>Price: {price}$</Typography>
        <Typography sx={cartCardSx.Typography}>
          Total: {quantity * price}$
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => removeFromCart(id)}
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
}
