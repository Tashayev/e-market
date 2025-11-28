import CartCard from "@/components/cards/cart-cards/CartCard";
import { useCarts } from "@/features/cart/useCart";
import { Box, Button, Grid, Typography } from "@mui/material";


export default function CartPage() {
  const { cartProducts, totalPrice, clearCart } = useCarts();

 
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Button onClick={clearCart}>Clear all</Button>
      </Box>
      {cartProducts.length > 0 ? (
        <Box>
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
