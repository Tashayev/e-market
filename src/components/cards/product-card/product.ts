import { type SxProps, type Theme } from "@mui/material";

export const productSx: Record<string, SxProps<Theme>> = {
  Card: {
    maxWidth: 240,
    borderRadius: 2,
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: 4,
    },
    width: "100%",
  },
  CardContent: { padding: 2 },
  CardActions: { padding: 2, paddingTop: 0, display: "flex", alignItems: 'end'},
  Box: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  Button: {
    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
  },
};
