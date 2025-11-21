import { Menu, ShoppingCart } from "lucide-react";
import { headerSx } from "./headerSx";
import { useUser } from "@/features/auth/user/useUser";
import { Avatar, Box, Button } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";
import { useCarts } from "@/features/cart/useCart";
import SearchBar from "../search-bar/SearchBar";

export default function Header({ handleToggleSidebar }: ToggleSidebarProp) {
  const { user, logout } = useUser();
  const { cartProducts } = useCarts();
  const isMobile = useIsMobile();

  return (
    <Box sx={headerSx.Box}>
      <Box sx={headerSx.wrapper}>
        {isMobile && (
          <Button onClick={handleToggleSidebar}>
            <Menu color="#ffffff" />
          </Button>
        )}
        <SearchBar />
      </Box>
      <Box sx={headerSx.wrapper}>
        <Box sx={headerSx.shopCart}>
          <ShoppingCart />
          <Box sx={headerSx.span}>{cartProducts.length}</Box>
        </Box>
        <Avatar
          src={user?.avatar}
          alt="User avatar"
          sx={headerSx.Avatar}
        />
        <Button onClick={() => logout()} variant="contained" color="primary">
          Log out
        </Button>
      </Box>
    </Box>
  );
}
