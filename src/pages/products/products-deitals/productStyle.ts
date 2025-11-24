import { type SxProps, type Theme } from "@mui/material";

export const productSx: Record<string, SxProps<Theme>> = {
  ImageList: { width: 500, height: 450 },
  ButtonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}