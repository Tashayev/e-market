import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import { style } from "./mainContentStyle";
import Sidebar from "@/components/sidebar/Sidebar";

export const ProtectedRoute = () => {
  const { user } = useUser();  
  if (!user) return <Navigate to="/auth/login" replace />;
  return (
    <>
      <Header />
      <div style={style.container}>
        <Sidebar />
        <div style={style.div}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
