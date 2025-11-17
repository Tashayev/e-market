import { Menu, ShoppingCart } from "lucide-react";
import { style } from "./headerStyle";
import { useUser } from "@/features/auth/user/useUser";
import { Avatar, Box, Button } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";
import { useCarts } from "@/features/cart/useCart";
import { useEffect } from "react";

export default function Header({ handleToggleSidebar }: ToggleSidebarProp) {
  const { user, logout } = useUser();
  const {cartProducts} =useCarts();
  const isMobile = useIsMobile();
  useEffect(()=>{
    user?.avatar
  },[])

  return (
    <Box style={style.header}>
      {isMobile && (
        <Button onClick={handleToggleSidebar}>
          <Menu color="#ffffff" />
        </Button>
      )}
      <Box style={style.shopCart}>
        <ShoppingCart />
        <span style={style.span}>{cartProducts.length}</span>
      </Box>

      <Avatar
        src={user?.avatar}
        alt="User avatar"        
      />
      <Button onClick={()=>logout()} variant="contained" color="primary">Log out</Button>
    </Box>
  );
}
