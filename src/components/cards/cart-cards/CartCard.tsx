//MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
//style
import { cartCardSx } from "./cartCardSx";
//hooks
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
        <Stack spacing={2}>
          <Typography gutterBottom sx={cartCardSx.Typography}>
            Name: {title}
          </Typography>
          <Typography sx={cartCardSx.Typography}>Price: {price}$</Typography>
          <Typography sx={cartCardSx.Typography}>
            Total: {quantity * price}$
          </Typography>
          <Typography variant="body2"></Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => removeFromCart(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
