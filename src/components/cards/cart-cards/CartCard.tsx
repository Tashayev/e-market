//MUI
import { Box } from "@mui/material";
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
  images: string[];
};

export default function CartCard({ id, quantity, title, price, images }: CartCardType) {
  const { removeFromCart } = useCarts();
  return (
    <Box sx={cartCardSx.Card}>
      <Stack spacing={2}>
        <Typography gutterBottom sx={cartCardSx.Typography}>
          Name: {title}
        </Typography>
        <Box component="img" src={images[0]}/>
        <Typography sx={cartCardSx.Typography}>Price: {price}$</Typography>
        <Typography sx={cartCardSx.Typography}>
          Total: {quantity * price}$
        </Typography>
        
        <Typography sx={cartCardSx.Typography}>
          Quantity: {quantity}
          {quantity > 1 ? " peaces" : " peace"}{" "}
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => removeFromCart(id)}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
}
