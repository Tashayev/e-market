
import {  Menu } from "lucide-react";

import { style } from "../headerStyle";
import { useUser } from "@/features/auth/user/useUser";
import { Button,  Typography } from "@mui/material";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleAdminSidebarProp } from "@/types/LayoutProps";



export default function AdminHeader({handleToggleAdminSidebar}: ToggleAdminSidebarProp) {
  const {user, logout} = useUser();
    const avatarUrl = user?.avatar ?? null;
    const isMobile = useIsMobile()
  
   
  
   

  return (
    <div style={style.header}>
      {isMobile && <Button onClick={handleToggleAdminSidebar}><Menu color="#ffffff" /></Button>}
      <Typography>Admin Panel</Typography>
     
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
      

      <button onClick={logout}>Log out</button>
    </div>
  );
}
