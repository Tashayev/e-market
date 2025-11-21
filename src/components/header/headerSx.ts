import { type SxProps, type Theme } from "@mui/material";

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
    color: "black",
    zIndex: "200",
    px: "100px",
  },
  BoxAdmin: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
    padding: "10px 20px 10px",
    boxSizing: "border-box",
    gap: "10px",
    position: "fixed",
    top: "0",
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
  
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  Avatar: {
    width: 32,
    height: 32,
  },
};
