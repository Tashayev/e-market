import { type SxProps, type Theme } from "@mui/material";

export const productSx: Record<string, SxProps<Theme>> = {
  Box: {
    maxWidth: 250,
    width: "100%",
    margin: 2,
    bgcolor: "background.paper",
    p: 2,
    display: "flex",
    flexDirection: "column",
  },
  BtnWrapper: {
    marginTop: 2,
    display: "flex",
    alignItems: "end",
    height: "100%",
  },
  Img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginTop: "10px",
  }
};
