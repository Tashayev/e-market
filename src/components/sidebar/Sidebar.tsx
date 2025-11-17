import { useUser } from "@/features/auth/user/useUser";
import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleSidebarProp } from "@/types/LayoutProps";

import { Button, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { X } from "lucide-react";

import { NavLink } from "react-router";

export default function Sidebar({handleToggleSidebar}:ToggleSidebarProp) {
  const isMobile = useIsMobile()
  const { user } = useUser();  
  const sidebarData = [
    { name: "Main page", id: 4, navigator: "/" },    
    { name: "Profile", id: 2, navigator: "/profile" },
    { name: "Cart", id: 3, navigator: "/cart" },
  ];
  return (
    <Box sx={{ width: 250 }}>
      <List>
      {isMobile && <Button onClick={handleToggleSidebar}><X/></Button>}

        {sidebarData.map((c) => (
          <ListItem key={c.id} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <NavLink to={c.navigator}>
                <ListItemText primary={c.name} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {user?.role === "admin" && (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <NavLink to="/admin/categories">
                <ListItemText primary="Admin panel" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );
}
