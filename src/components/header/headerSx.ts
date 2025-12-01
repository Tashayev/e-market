import { type SxProps, type Theme } from "@mui/material";

export const headerSx: Record<string, SxProps<Theme>> = {
  Box: {
    backdropFilter: "blur(1.5px)",
    alignContent: "center",
    paddingInline: "20px ",
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    alignItems: "center",
    gap: "10px",
    color: "black",
    zIndex: "200",
    justifyContent: "space-between",
    maxWidth: "1600px",
    mx: "auto",
    py: "10px",
  },

  BoxAdmin: {
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
    marginTop: "5px",
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
