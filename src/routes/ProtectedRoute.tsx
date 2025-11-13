import { useUser } from "@/features/auth/user/useUser";
import { Navigate, Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { style } from "./mainContentStyle";
import { useState, useEffect } from "react";
import useIsMobile from "@/tools/hooks/useIsMobile";

export const ProtectedRoute = () => {
  const { user } = useUser();
  if (!user) return <Navigate to="/auth/login" replace />;

  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div style={style.container}>
        {isSidebarOpen && (
          <div>
            <Sidebar />
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
