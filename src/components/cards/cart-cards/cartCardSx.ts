import {  type SxProps, type Theme } from "@mui/material";

export const cartCardSx: Record<string, SxProps<Theme>> = {
  Card:{ 
    maxWidth: "275px", 
    width: '100%',
    p: '10px'
  },
  Typography:{ color: 'text.secondary', fontSize: 14 }
}  