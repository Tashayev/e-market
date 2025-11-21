import { Menu, SearchIcon, ShoppingCart } from "lucide-react";
import {
  headerSx,
  Search,
  SearchIconWrapper,
  SettingIconWrapper,
  StyledInputBase,
} from "./headerSx";
import { useUser } from "@/features/auth/user/useUser";
import { Avatar, Box, Button } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";
import { useCarts } from "@/features/cart/useCart";
import { useState } from "react";
import SearchInputMenu from "../search-input/SearchInputMenu";
import { useNavigate } from "react-router";



export default function Header({ handleToggleSidebar }: ToggleSidebarProp) {
  const { user, logout } = useUser();
  const { cartProducts } = useCarts();
  const isMobile = useIsMobile();
  const [inputValue, setInputValue] = useState("");
  const navigatorate = useNavigate();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    navigatorate(`/search?query=${event.target.value}`);
  };

  return (
    <Box sx={headerSx.Box}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {isMobile && (
          <Button onClick={handleToggleSidebar}>
            <Menu color="#ffffff" />
          </Button>
        )}

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={inputValue}
            onChange={handleSearchChange}
          />
          <SettingIconWrapper>
            <SearchInputMenu />
          </SettingIconWrapper>
        </Search>
        
      </Box>
        
      <Box sx={headerSx.left}>
        <Box sx={headerSx.shopCart}>
          <ShoppingCart />
          <Box sx={headerSx.span}>{cartProducts.length}</Box>
        </Box>

        <Avatar
          src={user?.avatar}
          alt="User avatar"
          sx={{ width: 32, height: 32 }}
        />

        <Button onClick={() => logout()} variant="contained" color="primary">
          Log out
        </Button>
      </Box>
    </Box>
  );
}
