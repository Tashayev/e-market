import { RouterProvider } from "react-router";
import { router } from "./routes/routes.ts";
import "./index.css";
import { useUser } from "./features/auth/user/useUser.ts";
import { useEffect, useState } from "react";
import { load } from "./utils/storage.ts";

function App() {
  const { getUser } = useUser();
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    const initUser = async () => {
      const token = load("accessToken");     
      if (!token) {
        setInitialized(true);
        return;
      }
      try {
        await getUser();
      } catch (e) {
        console.error("Failed to load user:", e);
      } finally {
        setInitialized(true);
      }
    };
    initUser();
  }, []);
  if (!initialized) {
    return <div>Loading...</div>;
  }
  return <RouterProvider router={router} />;
}

export default App;
