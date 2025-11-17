import CartCard from "@/components/cards/category-cards/cart-cards/CartCard";
import { useCarts } from "@/features/cart/useCart";
import { Box, Grid, Typography } from "@mui/material";

export default function CartPage() {
  const { cartProducts, totalPrice } = useCarts();
  return (
    <Box>
      {cartProducts.length > 0 ? (
        <Box>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {cartProducts.map((p) => (
              <CartCard
                id={p.id}
                quantity={p.quantity}
                title={p.title}
                price={p.price}
              />
            ))}
          </Grid>
          <Typography>Total cart: {totalPrice}$</Typography>
        </Box>
      ) : (
        <Typography>Cart is empty</Typography>
      )}
    </Box>
  );
}
