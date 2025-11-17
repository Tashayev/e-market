import { RouterProvider } from "react-router";
import { router } from "./routes/routes.ts";
import "./index.css";
import { useUser } from "./features/auth/user/useUser.ts";
import { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";

function App() {
  const { getUser } = useUser();
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    const initUser = async () => {
      const token = localStorage.getItem("accessToken");     
      if (!token) {
        setInitialized(true);
        return;
      }
      try {
        await getUser();
      } catch (e) {
        toast.error("Failed to load user: "+ e);
      } finally {
        setInitialized(true);
      }
    };
    initUser();
  }, []);
  if (!initialized) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )

}

export default App;
