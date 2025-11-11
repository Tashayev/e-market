import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { style } from "./mainContentStyle";
import AdminHeader from "@/components/header/admin-header/AdminHeader";
import AdminSidebar from "@/components/sidebar/admin-sidebar/AdminSidbar";

export const AdminRoute = () => {
  const { user, isAdmin, isAuthenticated } = useUser();

  if (!user) return <Navigate to="/auth/login" replace />;
  else if (isAuthenticated && !isAdmin) return <Navigate to="/" replace />;
  return (
    <>
      <AdminHeader/>
      <div style={style.container}>
        <AdminSidebar />
        <div style={style.div}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
