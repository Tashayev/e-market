import CartCard from "@/components/cards/cart-cards/CartCard";
import { useCarts } from "@/features/cart/useCart";
import { Box, Button, Grid, Typography } from "@mui/material";
import { cartSx } from "./cartSx";
import { useEffect } from "react";

export default function CartPage() {
  const { cartProducts, totalPrice, clearCart } = useCarts();
  useEffect(() => {
    if (cartProducts.length === 0) return;
  }, [cartProducts]);

  return (
    <>
      {cartProducts.length > 0 ? (
        <Box>
          <Box sx={cartSx.Header}>
            <Button onClick={clearCart}>Clear all</Button>
            <Typography variant="h3">Total cart: {totalPrice}$</Typography>
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {cartProducts.map((p) => (
              <CartCard
                key={p.id}
                id={p.id}
                quantity={p.quantity}
                title={p.title}
                price={p.price}
                images={p.images}
              />
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography variant="h1">Cart is empty</Typography>
      )}
    </>
  );
}
