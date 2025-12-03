import type { TypographyVariantsOptions } from "@mui/material"

export const typography: TypographyVariantsOptions = {
  h1: {
    fontFamily: "var(--third-family)",
    fontSize: "48px",
    lineHeight: "83%",
    fontWeight: 800,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#000",
  },

  h3: {
    fontSize: "36px",
    lineHeight: "120%",
    fontWeight: 600,
  },
  h4: {
    fontSize: "32px",
    lineHeight: "140%",
    fontWeight: 600,
  },
  h5: {
    fontSize: "24px",
    lineHeight: "120%",
    fontWeight: 600,
  },
  h6: {
    fontSize: "20px",
    lineHeight: "140%",
    fontWeight: 600,
  },  
  button: {
    fontFamily: "var(--third-family)",
    fontWeight: "500",
    fontSize: "12px",
    letterSpacing: "0.17em",
  },
}
