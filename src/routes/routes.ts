import { createBrowserRouter } from "react-router";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { LoginPage } from "@/pages/auth/login/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import { ProfilePage } from "@/pages/profile/ProfilePage";
import CategoriesPage from "@/pages/products/categories/CategoriesPage";
import SubCategoryPage from "@/pages/products/sub-category/SubCategoryPage";
import ProductDeitalsPage from "@/pages/products/products-deitals/ProductDeitalsPage";
import BucketPage from "@/pages/bucket/BucketPage";
import AdminPage from "@/pages/admin/AdminPage";
import AdminCategoriesPage from "@/pages/admin/adminCategoriesPage/AdminCategoriesPage";
import AdminProductsPage from "@/pages/admin/adminProductsPage/AdminProductsPage";
import AdminUserPage from "@/pages/admin/adminUserPage/AdminUserPage";
import { AdminRoute } from "./AdminRoute";

export const router = createBrowserRouter([
   {
    path: "/admin",
    Component: AdminRoute,
    children:[
      {index: true, Component: AdminPage},
      { path: "categories", Component: AdminCategoriesPage },
      { path: "products", Component: AdminProductsPage },
      { path: "users", Component: AdminUserPage },
    ]

  },
  {
    path: "/",
    Component: ProtectedRoute,
    children: [
      { index: true, Component: DashboardPage },
      { path: "profile", Component: ProfilePage },
      { path: "categories", Component: CategoriesPage },
      { path: "categories/:id", Component: SubCategoryPage },
      { path: "products/:id", Component: ProductDeitalsPage },
      { path: "bucket", Component: BucketPage },
    ],
  },
 
  { path: "auth/login", Component: LoginPage },
  { path: "auth/registration", Component: RegisterPage },
]);
