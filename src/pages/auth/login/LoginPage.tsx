import { useUser } from "@/features/auth/user/useUser";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { style } from "../auth";
import { toast } from "react-toastify";
export const LoginPage = () => {
  const { loginUser, availabelUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const from = (location.state as any)?.from?.pathname || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isExist = await availabelUser({ email });

      if (!isExist) {
        toast.error("User does not exist");
        return;
      }
      const user = await loginUser({ email, password });
      if (user.role === "admin") {
        navigate("/admin/categories");
        toast.success("Login successful!");
        return;
      }
      navigate(from, { replace: true });
      toast.success("Login successful!");
    } catch (e) {
      toast.error("Auth error: " + e);
    }
  };

  return (
    <div className=" flex justify-center">
      <form onSubmit={handleLogin} style={style.form}>
        <h2>Log in</h2>
        <input
          
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          className="mb-0"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          current-password="true"
        />

        <button type="submit" className="bg-primary-900">Login</button>
        <NavLink to="/auth/registration" end>
          Registration
        </NavLink>
      </form>
      <p>
        You can find users to enter{" "}
        <a target="_blank" href="https://api.escuelajs.co/api/v1/users">
          here
        </a>
      </p>
    </div>
  );
};
