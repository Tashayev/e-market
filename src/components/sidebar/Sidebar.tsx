import { useUser } from "@/features/auth/user/useUser";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router";

export default function Sidebar() {
  const { user } = useUser();
  const sidebarData = [
    { name: "Main page", id: 4, navigator: "/" },
    { name: "Categories", id: 1, navigator: "/categories" },
    { name: "Profile", id: 2, navigator: "/profile" },
    { name: "Bucket", id: 3, navigator: "/bucket" },
  ];
  return (
    <Box sx={{ width: 250 }}>
      <List>
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
              <NavLink to="/admin/users">
                <ListItemText primary="Admin panel" />
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );
}
