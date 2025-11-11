import { useUser } from "@/features/auth/user/useUser";



export const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h2></h2>
      <p>Добро пожаловать, {user?.name}</p>
      <button ></button>
    </div>
  );
};
