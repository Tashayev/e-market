import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { style } from "./mainContentStyle";
import AdminHeader from "@/components/header/admin-header/AdminHeader";
import AdminSidebar from "@/components/sidebar/admin-sidebar/AdminSidbar";
import { useState, useEffect } from "react";
import useIsMobile from "@/tools/hooks/useIsMobile";

export const AdminRoute = () => {
  const { user, isAdmin, isAuthenticated } = useUser();

  
  if (!user) return <Navigate to="/auth" replace />;
  else if (isAuthenticated && !isAdmin) return <Navigate to="/" replace />;

  const isMobile = useIsMobile();
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  const handleToggleAdminSidebar = () => {
    setIsAdminSidebarOpen((prev) => !prev);
  };

  
  useEffect(() => {
    if (isMobile) setIsAdminSidebarOpen(false);
    else setIsAdminSidebarOpen(true);
  }, [isMobile]);

  return (
    <>
      <AdminHeader handleToggleAdminSidebar={handleToggleAdminSidebar} />

      <div style={style.container}>
        
        {isAdminSidebarOpen && (
          <div
            style={{
              position: isMobile ? "fixed" : "relative",
              top: 0,
              left: 0,
              width: isMobile ? "70%" : "250px",
              height: isMobile ? "100vh" : "auto",
              backgroundColor: "#fff",
              boxShadow: isMobile ? "2px 0 8px rgba(0,0,0,0.3)" : "none",
              zIndex: isMobile ? 1001 : "auto",
              transition: "transform 0.3s ease",
            }}
          >
            <AdminSidebar handleToggleAdminSidebar={handleToggleAdminSidebar}/>
          </div>
        )}

        
        {isMobile && isAdminSidebarOpen && (
          <div
            onClick={handleToggleAdminSidebar}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1000,
            }}
          />
        )}

        
        <div style={style.div}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
