import type { SxProps, Theme } from "@mui/material";


export const categorySx: Record<string, SxProps<Theme>> ={
  Box:{
    minWidth: 275,
    margin:2
  },
  Card:{    
    boxShadow:"none",
    borderRadius:'10px',
  }
}