import { Menu } from "lucide-react";
import { headerSx } from "../headerSx";
import { useUser } from "@/features/auth/user/useUser";
import { Avatar, Box, Button, Typography } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleAdminSidebarProp } from "@/types/LayoutProps";

export default function AdminHeader({
  handleToggleAdminSidebar,
}: ToggleAdminSidebarProp) {
  const { user, logout } = useUser();

  const isMobile = useIsMobile();

  return (
    <Box sx={headerSx.Box}>
      {isMobile && (
        <Button onClick={handleToggleAdminSidebar}>
          <Menu color="#ffffff" />
        </Button>
      )}
      <Typography>Admin Panel</Typography>

      <Avatar
        src={user?.avatar}
        alt="User avatar"
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <button onClick={logout}>Log out</button>
    </Box>
  );
}
