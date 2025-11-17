import { useUser } from "@/features/auth/user/useUser";
import { useCarts } from "@/features/cart/useCart";
import { Typography } from "@mui/material";


export default function CartPage() {
  const {user} = useUser();
  const {cart, removeFromCart} = useCarts();
  return (
    <div>
      {cart.map(item=>(
        <div>
          <Typography>
            
          </Typography>
        </div>
      ))}
    </div>
  )
}
