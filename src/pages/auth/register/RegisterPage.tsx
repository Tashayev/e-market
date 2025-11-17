import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { style } from "../auth";
import { useUser } from "@/features/auth/user/useUser";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, availabelUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  const from = (location.state as any)?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isAvailable = await availabelUser({ email });
      if (!isAvailable) {
        await register({ name, email, password, avatar });
        navigate(from, { replace: true });
        toast.success("Registration successful!")
      } else {
        toast.error(`The email ${email} already exists`);
      }
    } catch (error) {      
      toast.error("Error during registration: " + error);
    }
  };

  return (
    <div style={style.container}>
      <form style={style.form} onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <input
          type="text"
          style={style.input}
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          style={style.input}
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          style={style.input}
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          current-password="true"
        />
        <input
          type="text"
          style={style.input}
          placeholder="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit">Register</button>
        <NavLink to="/auth/login" end>
          Log in
        </NavLink>
      </form>
    </div>
  );
}
