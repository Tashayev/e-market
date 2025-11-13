import { useUser } from "@/features/auth/user/useUser";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { style } from "../auth";

export const LoginPage = () => {
  const { loginUser, availabelUser,  } = useUser();
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
        alert("User does not exist");
        return;
      }
      const user = await loginUser({ email, password });
      if (user.role === 'admin') {
        navigate("/admin/categories");
        return;
      }

      navigate(from, { replace: true });
    } catch (e) {
      console.log(e);
      alert("Auth error");
    }
  };

  return (
    <div style={style.container}>
      <form onSubmit={handleLogin} style={style.form}>
        <h2>Log in</h2>
        <input
          style={style.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          
        />

        <input
          style={style.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          current-password="true"
        />

        <button type="submit">Login</button>
        <NavLink to="/auth/registration" end>
          Registration
        </NavLink>
      </form>
      <p>You can find users to enter <a target="_blank" href='https://api.escuelajs.co/api/v1/users'>here</a></p>
    </div>
  );
};
