export const style = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    "@media screen and (maxWidth: 800px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
} as const;
