import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { style } from "./mainContentStyle";
import AdminHeader from "@/components/header/admin-header/AdminHeader";

import { useState, useEffect } from "react";
import useIsMobile from "@/tools/hooks/useIsMobile";
import AdminSidebar from "@/components/sidebar/admin-sidebar/AdminSidbar";
export const AdminRoute = () => {
  const { user, isAdmin, isAuthenticated } = useUser();

  if (!user) return <Navigate to="/auth/login" replace />;
  else if (isAuthenticated && !isAdmin) return <Navigate to="/" replace />;
  const isMobile = useIsMobile();
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  const handleToggleAdminSidebar = () => {
    setIsAdminSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobile) {
      setIsAdminSidebarOpen(false);
    } else {
      setIsAdminSidebarOpen(true);
    }
  }, [isMobile]);
  return (
    <>
      <AdminHeader handleToggleAdminSidebar={handleToggleAdminSidebar} />
      <div style={style.container}>
        {isAdminSidebarOpen && <AdminSidebar />}
        {isMobile && isAdminSidebarOpen && <div onClick={handleToggleAdminSidebar} />}
        <div style={style.div}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
