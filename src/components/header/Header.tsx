import { CircleUserRound, Menu } from "lucide-react";
import { style } from "./headerStyle";
import { useUser } from "@/features/auth/user/useUser";
import { Button } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";

export default function Header({ handleToggleSidebar }: ToggleSidebarProp) {
  const { user, logout } = useUser();
  const avatarUrl = user?.avatar ?? null;

  const isMobile = useIsMobile();

  return (
    <div style={style.header}>
      {isMobile && (
        <Button onClick={handleToggleSidebar}>
          <Menu color="#ffffff" />
        </Button>
      )}

      <img
        src={avatarUrl!}
        alt="User avatar"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <CircleUserRound size={40} />

      <button onClick={logout}>Log out</button>
    </div>
  );
}
