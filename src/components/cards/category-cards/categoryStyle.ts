import type { SxProps, Theme } from "@mui/material";

export const categorySx: Record<string, SxProps<Theme>> = {
  Box: {
    maxWidth: 250,
    margin: 2,
    bgcolor: "background.paper",
    p: 2,
  },
  Img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginTop: "10px",
  },
};
