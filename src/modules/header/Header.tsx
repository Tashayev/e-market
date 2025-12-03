import { Heart, Menu, ShoppingCart } from "lucide-react";
import { headerSx } from "./headerSx";
import { useUser } from "@/features/auth/user/useUser";
import { Avatar, Box, Button } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";
import { useCarts } from "@/features/cart/useCart";
import SearchBar from "@/components/search-bar/SearchBar";


export default function Header({ handleToggleSidebar }: ToggleSidebarProp) {
  const { user, logout } = useUser();
  const { cartProducts } = useCarts();
  const isMobile = useIsMobile();

  return (
    <Box sx={headerSx.Box}>
      <Box sx={headerSx.Container}>
        {isMobile && (
          <Button onClick={handleToggleSidebar}>
            <Menu color="#ffffff" />
          </Button>
        )}
        <SearchBar />
      </Box>
      <Box sx={headerSx.wrapper}>
        <Heart />
        <Box sx={headerSx.shopCart}>
          <ShoppingCart />
          <Box sx={headerSx.span}>{cartProducts.length}</Box>
        </Box>
        <Avatar
          onClick={() => logout()}
          src={user?.avatar}
          alt="User avatar"
          sx={headerSx.Avatar}
        />
      </Box>
    </Box>
  );
}
