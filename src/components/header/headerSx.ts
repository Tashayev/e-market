import {
  alpha,
  InputBase,
  styled,
  type SxProps,
  type Theme,
} from "@mui/material";

export const headerSx: Record<string, SxProps<Theme>> = {
  Box: {
    backgroundColor: "#fff",
    padding: "10px 20px 10px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    zIndex: "200",
    px: "100px",
  },

  shopCart: {
    marginRight: "10px",
    position: "relative",
  },
  span: {
    position: "absolute",
    borderRadius: "999px",
    padding: "0 6px",
    backgroundColor: "red",
    fontSize: "14px",
    bottom: "15px",
    right: "-12px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: '999px',
  color: 'black',
  border: "1px solid #C3D4E9",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),    
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));
export const SettingIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%", 
  position:"absolute",
  right:0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  cursor: "pointer",
}));  
