import type { SxProps, Theme } from "@mui/material";

export const categorySx: Record<string, SxProps<Theme>> = {
  Box: {
    display: "flex",
    gap: 2,
    flexDirection: "column",
    alignItems: "center",
  },
};
