import useIsMobile from "@/tools/hooks/useIsMobile";
import type { ToggleAdminSidebarProp } from "@/types/LayoutProps";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { X } from "lucide-react";
import { NavLink } from "react-router";

export default function AdminSidebar({handleToggleAdminSidebar}: ToggleAdminSidebarProp) {
  const isMobile = useIsMobile()
  const adminData = [
    { name: "Main page", id: 4, navigator: "/" },
    { name: "Categories control", id: 5, navigator: "/admin/categories" },
    { name: "Products control", id: 6, navigator: "/admin/products" },
   
  ];
  return (
    <Box sx={{ width: 250 }}>
      {isMobile && <Button onClick={handleToggleAdminSidebar}><X/></Button>}
      <List>
        {adminData.map((c) => (
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
    </Box>
  );
}
