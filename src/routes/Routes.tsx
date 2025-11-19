import { createBrowserRouter } from "react-router";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { AuthPage } from "@/pages/auth/AuthPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProfilePage } from "@/pages/profile/ProfilePage";
import CategoryPage from "@/pages/products/category/CategoryPage";
import ProductDeitalsPage from "@/pages/products/products-deitals/ProductDeitalsPage";
import AdminPage from "@/pages/admin/AdminPage";
import AdminCategoriesPage from "@/pages/admin/adminCategoriesPage/AdminCategoriesPage";
import AdminProductsPage from "@/pages/admin/adminProductsPage/AdminProductsPage";
import { AdminRoute } from "./AdminRoute";
import CartPage from "@/pages/cart/CartPage";

export const router = createBrowserRouter([
  {
    path: "/admin",
    Component: AdminRoute,
    children: [
      { index: true, Component: AdminPage },
      { path: "categories", Component: AdminCategoriesPage },
      { path: "products", Component: AdminProductsPage },
    ],
  },
  {
    path: "/",
    Component: ProtectedRoute,
    children: [
      { index: true, Component: DashboardPage },
      { path: "profile", Component: ProfilePage },
      { path: "category/:id", Component: CategoryPage },
      { path: "product/:id", Component: ProductDeitalsPage },
      { path: "cart", Component: CartPage },
    ],
  },
  // Единый маршрут аутентификации
  { 
    path: "/auth", 
    Component: AuthPage 
  },
  // Можно оставить редиректы для обратной совместимости
  { 
    path: "/auth/login", 
    loader: () => {
      window.location.href = '/auth';
      return null;
    }
  },
  { 
    path: "/auth/registration", 
    loader: () => {
      window.location.href = '/auth';
      return null;
    }
  },
]);