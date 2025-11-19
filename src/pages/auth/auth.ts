import { type SxProps, type Theme } from "@mui/material";

export const authSx: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    p: 2,
    minHeight: "100vh",
    backgroundColor: "grey.50",
    
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    p: 4,
    borderRadius: 2,
    boxShadow: 3,
    transition: 'all, 1s ease-out',
  },
  formControl: {
    width: '100%'
  },
  tabsContainer: {
    display: "flex",
    width: "100%",
    borderBottom: 1,
    borderColor: "divider",
    mb: 3,
  },
  activeTab: {
    flex: 1,
    py: 2,
    textAlign: "center",
    cursor: "pointer",    
    borderBottom: 2,
    borderColor: "primary.main",
    color: "primary.main",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "action.hover",
    },
    transition: 'all 0.5s ease-out',
  },
  inactiveTab: {
    flex: 1,
    py: 2,
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    color: "text.secondary",
    "&:hover": {
      backgroundColor: "action.hover",
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    mb: 3,
    color: "text.primary",
  },
  link: {
    textAlign: "center",
    mt: 2,
    "& a": {
      color: "primary.main",
      textDecoration: "none",
      "&:hover": {
        color: "primary.dark",
        textDecoration: "underline",
      },
    },
  },
  textInfo: {
    textAlign: "center",
    color: "text.secondary",
    maxWidth: "400px",
    "& a": {
      color: "primary.main",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  error: {
    mb: 2,
    p: 2,
    backgroundColor: "error.light",
    borderRadius: 1,
    border: 1,
    borderColor: "error.main",
  },
  button:{
    transition: 'all 0.5s easy-out'
  }
};