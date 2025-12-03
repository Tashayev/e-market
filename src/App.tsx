//router
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.tsx";
//toast
import { ToastContainer } from "react-toastify";
//hooks
import { useAppInit } from "./tools/hooks/useAppInit.ts";
//styles
import "./index.css";

function App() {
  const initialized = useAppInit();
  if (!initialized) return <div>Loading...</div>;

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
