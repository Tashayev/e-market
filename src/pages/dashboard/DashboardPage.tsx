import { useUser } from "@/features/auth/user/useUser";
import CategoryCard from "@/components/carts/category-cards/CategoryCard";
import { useProducts } from "@/features/products/useProduct";
import { useEffect } from "react";

export const DashboardPage = () => {
  const { user } = useUser();
  const { categories, fetchCategories } = useProducts();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <h2></h2>
      <p>Добро пожаловать, {user?.name}</p>
      <div>
        {categories.map((c) => (
          <CategoryCard category={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};
