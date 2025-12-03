//react
import { createRoot } from "react-dom/client";
//redux
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./features/store/store.ts";
//mui
import { ThemeProvider } from "@mui/material";
//app
import App from "./App.tsx";
//styles
import "./index.css";
import { theme } from "./theme/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
