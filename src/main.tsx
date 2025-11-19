import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./features/store/store.ts";

import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
