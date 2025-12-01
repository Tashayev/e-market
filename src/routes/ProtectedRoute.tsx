import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { style } from "./mainContentStyle";
import { useState, useEffect } from "react";
import useIsMobile from "@/tools/hooks/useIsMobile";

export const ProtectedRoute = () => {
  
  const { user } = useUser();

  const isMobile = useIsMobile();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  if (!user) return <Navigate to="/auth" replace />;

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div style={style.container}>
        {isSidebarOpen && (
          <div
            style={{
              position: isMobile ? "fixed" : "relative",
              top: 0,
              left: 0,
              width: isMobile ? "70%" : "250px",
              height: isMobile ? "100vh" : "auto",              
              boxShadow: isMobile ? "2px 0 8px rgba(0,0,0,0.3)" : "none",
              zIndex: isMobile ? 1001 : "auto",
              transition: "transform 0.3s ease",
            }}
          >
            <Sidebar handleToggleSidebar={handleToggleSidebar} />
          </div>
        )}

        {isMobile && isSidebarOpen && <div onClick={handleToggleSidebar} />}

        <div style={style.div}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
